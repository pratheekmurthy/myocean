const jwt = require('jsonwebtoken');
const database = require('../services/database')
const {forgotPassword} = require('../utility/forgotpassword')
const {emailerInfo} = require('../utility/emailConfig')
const sendEmails = require('../utility/emailer')
const crypto = require('crypto')
// let libPath;
// if (process.platform === 'win32') {           // Windows
//   libPath = 'D:\app\instantclient_11_2_32Bit';
// } else if (process.platform === 'darwin') {   // macOS
//   libPath = process.env.HOME + '/Downloads/instantclient_19_8';
// }
// if (libPath && fs.existsSync(libPath)) {
//   oracledb.initOracleClient({ libDir: libPath });
// }

exports.login = async (req, res, next) => {
    const username = req.body.userName;
    const password = req.body.password;
    const otp_value = req.body.otpValue;
    let loadedUser;
    try {
        // let query = `select * from qport_user_profile a where (lower(a.username) = :username or lower(a.email_id) = :email) and a.is_active = 1`
        // let binds = [username, username];
        // const user = await database.simpleExecute(query, binds);
        // if (user.rows.length == 0) {
        //     // const error = new Error('Username invalid');
        //     // error.statusCode = 401;
        //     // throw error;
        //     res.status(200).json({
        //         Error: true,
        //         Message: "Username invalid",
        //         OTPRequired: false,
        //         statusCode: 403,
        //         Token: ""
        //     });
        //     return;
        // }
        let query = `select * from qport_user_profile t where t.is_active = 1 and (lower(t.username) = :username or lower(t.email_id) = :email) and (decoder(t.passwordhash) = :password or t.login_code_number = :password)`
        let binds = [username, username, password, password]
        isValidUser = await database.simpleExecute(query, binds);
        if (isValidUser.rows.length == 0) {
            // const error = new Error('unauthorized');
            // error.statusCode = 401;
            // throw error;
            res.status(200).json({
                error: true,
                message: "Invalid Credential",
                OTPRequired: false,
                statusCode: 401,
                Token: ""
            });
            return;
        }

        let currUser = isValidUser.rows[0]
        let q1 = `select * from user_preferences_tbl a where a.user_mst_fk = :userpk`
        let b1 = [currUser.USERPK]
        const user_prefrence = await database.simpleExecute(q1, b1);
        if (user_prefrence.rows.length == 0) {
            //const error = new Error('A user prefrence was not found.');
            //error.statusCode = 401;
            //throw error;
            res.status(200).json({
                Error: true,
                message: "A user prefrence was not found.",
                OTPRequired: false,
                statusCode: 401,
                Token: ""
            });
            return;
        }
        let userPrefers = user_prefrence.rows[0]

        loadedUser = {
            'usermaster_pk': currUser.USERMASTER_PK,
            'gfCompany_FK': currUser.GEN_COUNTRY_FK,
            'company_fk': currUser.COMPANY_FK,
            'username': currUser.USERNAME,
            'email_id': currUser.EMAIL_ID,
            'company_type': currUser.COMPANY_TYPE,
            'mobile_number': currUser.MOBILE_NUMBER,
            'office_number': currUser.OFFICE_NUMBER,
            'rel_mobile_number': currUser.REL_MOBILE_NUMBER,
            'pre_language': 'EN-UK',
            'regional_format': 'ES-PY',
            'pre_date_format': userPrefers.USER_DATE,
            'permitted_file_types': '',
            'is_notification_allowed': currUser.NOTIFICATION_REQUIRED,
            'is_email_allowed': currUser.RECOMMENDED_EMAILS,
            'is_message_allowed': true,
            'is_profile_allowed': false,
            'user_image': currUser.USER_IMAGE,
            'alias': currUser.ALIAS,
            'mobContryCode': currUser.CONTACT_MOB_COUNTRYCODE
        }
        const token = jwt.sign(
        {
            UserName: loadedUser.username,
            CompanyFk: loadedUser.company_fk,
            UserPk: loadedUser.usermaster_pk
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
        );
        res.status(200).json({ "statusCode": 200, token: token, userDetails: loadedUser });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.forgotPassword = async (req, res, next) => {
    //const username = req.body.username;
    const { userName } = req.body;
    try {
        let query = `select a.userpk, a.email_id from qport_user_profile a where (lower(a.username) = :userName or lower(a.email_id) = :userName) and a.is_active = 1`
        let binds = [userName, userName];
        const user = await database.simpleExecute(query, binds);
        if (user.rows.length == 0) {
            res.status(200).json({ "statusCode": 404, "data": "User not found.", error: true });
            return;
        }
        let userpk = user.rows[0].USERPK;
        let emailid =  user.rows[0].EMAIL_ID;
        const newPassword =  RandomPassword();
        //const newPassword = 'Welcome@2022';
        query = ' update qport_user_profile t ';
        query += ' set t.login_code_number = \'' + newPassword + '\'';
        query += ' where t.userpk = ' + userpk + '';
        const userUpdRes = await database.simpleExecute(query, [], { autoCommit: true });
        let resp =  {
            MC_PREVIEW_TEXT : "Forgot Password",
            USER_NAME: userName,
            LOGIN_CODE_NUMNER: newPassword
        }
        const output = forgotPassword('Forgot Password', resp)
        let response = await sendEmails(emailerInfo.FromUser, emailid, output, 'MyOcean: OTP for login');
        if(response.Data ==='Success')
             res.status(200).json({ "statusCode": 200, "data": "Password sent successfully in register email." });
        else
            res.status(200).json({ "statusCode": 401, "data":  response.Data});
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

function RandomPassword() {
    const generatePassword = (
        length = 15,
        wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
      ) =>
        Array.from(crypto.randomFillSync(new Uint32Array(length)))
          .map((x) => wishlist[x % wishlist.length])
          .join('')
      
    return generatePassword()
}

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