const database = require('../services/database')

exports.fetchQPORTCommGrp =  async (req, res, next) => {
    const { userpk } = req.query || 0;
    try {
        let query = 'select sysdate from dual ';
        const result = await database.simpleExecute(query);
        data = result.rows[0]
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

