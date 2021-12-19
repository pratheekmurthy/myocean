const database = require('../services/database')

exports.alertCount =  async (req, res, next) => {
    const { userpk } = req.query;
    try {
        let query = `select count(*) unreadcount from qport_messagelog msg where msg.receiver_fk = :userpk and msg.read_status = 'Un Read' and msg.is_active = 1 group by msg.receiver_fk, msg.read_status`
        let bind = [userpk]
        const alertCount = await database.simpleExecute(query, bind);
        data = alertCount.rows[0]
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": lowercaseKeys(data)})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});