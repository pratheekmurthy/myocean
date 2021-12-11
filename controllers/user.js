const fs = require('fs');
const oracledb = require('oracledb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const con = require('../utility/dbconfig')

let libPath;
if (process.platform === 'win32') {           // Windows
  libPath = 'D:\app\instantclient_11_2_32Bit';
} else if (process.platform === 'darwin') {   // macOS
  libPath = process.env.HOME + '/Downloads/instantclient_19_8';
}
if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath });
}

exports.login = (req, res, next) => {
    const username = req.body.userName;
    const password = req.body.password;
    const otp_value = req.body.otpValue;
    let loadedUser;
    let connection;
    (async function() {
        try{
           connection = await oracledb.getConnection(con);
           console.log("Successfully connected to Oracle!")
           connection.execute(
            `select * from qport_user_profile a where (lower(a.username) = :username or lower(a.email_id) = :email) and a.is_active = 1`,
            [username, username],
           function(err, user) {
                if (err) {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                }
                let meta_data_name = user.metaData;
                let meta_data = extractName(meta_data_name);
                if (user.rows.length == 0) {
                    const error = new Error('A user with this email could not be found.');
                    error.statusCode = 401;
                    throw error;
                }
                const userData = toObject(meta_data, user.rows[0])
                loadedUser = userData;
                console.log(userData)
                // isEqual = bcrypt.compare(password, user.password);
                // if (!isEqual) {
                //     const error = new Error('Wrong password!');
                //     error.statusCode = 401;
                //     throw error;
                // }
                const token = jwt.sign(
                    {
                        UserName: loadedUser.username,
                        CompanyFk: loadedUser.company_fk,
                        UserPk: loadedUser.userpk
                    },
                    'somesupersecretsecret',
                    { expiresIn: '1h' }
                );
                res.status(200).json({ token: token, userDetails: loadedUser });
           });
        } catch(err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            console.log('error occoured')
            next(err);
        } finally {
            if (connection) {
              try {
                await connection.close();
              } catch(err) {
                console.log("Error when closing the database connection: ", err);
              }
            }
        }
    })()
};

function toObject(names, values) {
    var result = {};
    for (var i = 0; i < names.length; i++)
         result[names[i]] = values[i];
    return result;
}

function extractName(data) {
    var result = [];
    for (var i = 0; i < data.length; i++)
         result.push((data[i].name).toLowerCase())
    return result;
}