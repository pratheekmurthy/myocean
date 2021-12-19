const database = require('../services/database')

exports.fetchPOLList = async (req, res, next) => {
    try {
       const {fromportfk} = req.query;
       let query = "demo"
       const fetchPOLList = await database.simpleExecute(query);
       data = fetchPOLList.rows
       res.send(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchPODList = async (req, res, next) => {
    try {
       const {toportfk} = req.query;
       let query = "demo"
       const fetchPODList = await database.simpleExecute(query);
       data = fetchPODList.rows
       res.send(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchTerList = async (req, res, next) => {
    try {
       const {PortFK} = req.query;
       let query = "demo"
       const FetchTerList = await database.simpleExecute(query);
       data = FetchTerList.rows
       res.send(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}