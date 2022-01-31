const database = require('../services/database')

exports.fetchDocListing =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchDocEntry =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}


exports.fetchDocParameter =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.getDocGrpDropdown =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.documentSave =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchWFListing =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}
exports.fetchWorkFlowEntry =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchWorkFlowLog =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.saveWorkFlow =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.isApprover =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.getWorkFlowMail =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchWFLocation =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchWFUser =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchWFAppUser =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchDepartment =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchDesignation =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.fetchDocDropdown =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.delWorkFlow =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.deactivateWorkFlow =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.getLocationPK =  async (req, res, next) => {
    try {
        let query = ' select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}


