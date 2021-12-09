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

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const password = req.body.password;
    bcrypt
        .hash(password, 12)
        .then(async hashedPw => {
            let connection
            try{
                connection = await oracledb.getConnection(con);
                const sqlQuery = `INSERT INTO "Users"("firstName", email, "password") VALUES(:1, :2, :3)`;
                binds = [[firstName, email, hashedPw ]];
                result = await connection.execute(sqlQuery, binds, {});
                res.status(201).json({ message: 'User created!', userId: result.id });
            } catch(err) {
                if (!err.statusCode) {
                    err.statusCode = 500;
                }
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
        })
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    let connection;
    (async function() {
        try{
           connection = await oracledb.getConnection(con);
           console.log("Successfully connected to Oracle!")
           connection.execute(
            `select * from "Users" where email = :email`,
            [email],  
           function(err, user) {
                if (err) {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                }
                if (!user) {
                    const error = new Error('A user with this email could not be found.');
                    error.statusCode = 401;
                    throw error;
                }
                loadedUser = user.rows[0];
                isEqual = bcrypt.compare(password, user.password);
                if (!isEqual) {
                    const error = new Error('Wrong password!');
                    error.statusCode = 401;
                    throw error;
                }
                const token = jwt.sign(
                    {
                        email: loadedUser.email,
                        userId: loadedUser.id
                    },
                    'somesupersecretsecret',
                    { expiresIn: '1h' }
                );
                res.status(200).json({ token: token, userId: loadedUser.id });
           });
        } catch(err) {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
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
