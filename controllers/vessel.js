const database = require('../services/database')

exports.getVessel =  async (req, res, next) => {
    const { VslType } = req.query || 0;
    try {
        let query = ' select t.vessel_mst_pk as "pk", ';
        query += ' t.vessel_id     as "id", ';
        query += ' t.vessel_name   as "name" ';
        query += ' from vessel_mst_tbl t ';
        query += ' where t.is_active = 1 ';
        query += ' order by t.vessel_name ';
        //console.log(query);
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

exports.fetchOverview =  async (req, res, next) => {
    const { VesselmasterPk } = req.query || 0;
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