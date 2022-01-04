const res = require('express/lib/response');
const database = require('../services/database')

exports.fetchusers = async (req, res, next) => {
    try {
       let query = "demo"
       const fetchUser = await database.simpleExecute(query);
       data = fetchUser.rows
       res.send(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "Data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchuserdetails = async (req, res, next) => {
try {
    let query = "demo"
    const userDetails = await database.simpleExecute(query);
    data = userDetails.rows
    res.send(200).json({ "Status": "Success",
    "StatusCode": "GFS000001", "Data": data})
}
catch(err){
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
}
}

exports.fetchuserrights = async(req, res, next) => {
    try {
        let query = "demo"
        const fetchUserRight = await database.simpleExecute(query);
        data = fetchUserRight.rows
        res.send(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
     } catch(err) {
         if (!err.statusCode) {
             err.statusCode = 500;
         }
         next(err);
     }
}

exports.saveuser = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchuseraccess = async(req, res, next) => {
    try {
        let query = "demo"
        const fetchUserAcces = await database.simpleExecute(query);
        data = fetchUserAcces.rows
        res.send(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
     } catch(err) {
         if (!err.statusCode) {
             err.statusCode = 500;
         }
         next(err);
     }
}

exports.saveuseraccess = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deactivateuser = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteuser = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.saveuserpreference = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.getuserdropdown = async(req, res, next) => {
    try {
        let query = "demo"
        const userDropdown = await database.simpleExecute(query);
        data = userDropdown.rows
        res.send(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchuserpreference = async(req, res, next) => {
    try {
        let query = "demo"
        const userPref = await database.simpleExecute(query);
        data = userPref.rows
        res.send(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.changepwd = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.sendotpbyemail = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.validatepassword = async(req, res, next) => {
    try {

    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.printusers = async(req, res, next) => {
    try {
        let query = "demo"
        const printUser = await database.simpleExecute(query);
        data = printUser.rows
        res.send(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}