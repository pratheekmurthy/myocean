const database = require('../services/database')

exports.getUnReadCnt = async (req, res, next) => {
    try {
       const {userpk, folderfk} = req.query;
       let query = "select count(*) from User_message_trn "
       const getUnReadCnt = await database.simpleExecute(query);
       data = getUnReadCnt.rows
       res.status(200).json({ "Status": "Success",
       "StatusCode": "GFS000001", "Data": data})
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}