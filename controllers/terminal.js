const database = require('../services/database')

exports.getQPORTCntry =  async (req, res, next) => {
    const { userpk } = req.query || 0;
    try {
        let query = ' select t.terminal_mst_pk as "pk", ';
        query += ' t.terminal_name   as "id", ';
        query += ' t.terminal_name   as "name" ';
        query += ' from terminal_mst_tbl t ';
        query += ' where t.active = 1 ';
        if(userpk > 0)
        {
          query += ' and t.terminal_mst_pk = ' + userpk + '';
        }
        query += ' order by t.terminal_name';
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