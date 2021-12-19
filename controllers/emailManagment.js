const database = require('../services/database')

exports.getUnReadCnt = async (req, res, next) => {
    try {
       const {userpk, folderfk} = req.query;
       let query = "demo"
       const getUnReadCnt = await database.simpleExecute(query);
       data = getUnReadCnt.rows
       res.send(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}