const nodemailer = require('nodemailer');
const {emailSettings, emailerInfo} = require('./emailConfig')

const handelEmails = (emailFrom, emailTo, emailTemplate, subject) => {
    return new Promise((resolve, reject) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(emailSettings);
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: emailFrom, // sender address
            to: emailTo, // list of receivers
            subject: subject, // Subject line
            html: emailTemplate // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error)
            }
            
            resolve({
            "status": true,
            "Data": "Success" 
            })
        })
    })
}

module.exports = handelEmails;