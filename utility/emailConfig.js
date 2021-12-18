require('dotenv').config()

exports.emailSettings = {
    host: process.env.mailHost || 'mail.YOURDOMAIN.com',
    port: process.env.mailPort || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.emailUsername || 'YOUREMAIL', // generated ethereal user
        pass: process.env.emailPassword || 'YOURPASSWORD'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
}

exports.emailerInfo = {
    "FromUser" : process.env.fromUser,
    "qport_url" : process.env.qport_url,
    "subject": process.env.subject
}