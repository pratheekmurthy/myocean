const database = require('../services/database')

exports.fetchGridPref =  async (req, res, next) => {
    const { userpk } = req.query || 0;
    try {
        let query = 'select count(*) unreadcount ';
        query += ' from qport_messagelog msg where msg.is_active = 1 ';
        if(userpk > 0)
        {
          query += ' and msg.receiver_fk = ' + userpk + '';
        }
        query += ' and msg.read_status = \'Un Read\'';
        query += ' group by msg.receiver_fk, msg.read_status';
        //let bind = [userpk]
        const alertCount = await database.simpleExecute(query);
        data = alertCount.rows[0]
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": lowercaseKeys(data)})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}