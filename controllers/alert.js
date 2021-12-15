const database = require('../services/database')

exports.alertCount =  async (req, res, next) => {
    const { userpk } = req.query;

    let query = `select count(*) unreadcount from qport_messagelog msg where msg.receiver_fk = :userpk and msg.read_status = 'Un Read' and msg.is_active = 1 group by msg.receiver_fk, msg.read_status`
    let bind = [userpk]
    const alertCount = await database.simpleExecute(query, bind);
    if(alertCount.rows.length > 0){
        console.log(alertCount.rows[0])
    }
}