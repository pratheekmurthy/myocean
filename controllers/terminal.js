const database = require('../services/database')

exports.getQPORTCntry =  async (req, res, next) => {
    const { countrypk } = req.query || 0;
    try {
        let query = ' select c.country_mst_pk as "pk", ';
        query += ' c.country_id   as "id", ';
        query += ' c.country_name   as "name" ';
        query += ' from country_mst_tbl c ';
        query += ' where c.active = 1 ';
        if(countrypk > 0)
        {
          query += ' and c.country_mst_pk = ' + countrypk + '';
        }
        query += ' order by c.country_name';
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

exports.fetchQPORTLocList =  async (req, res, next) => {
    const { locationpk } = req.query || 0;
    try {
        let query = 'select t.location_mst_pk as "pk", ';
        query += ' t.location_mst_pk   as "id", ';
        query += ' t.location_name   as "name" ';
        query += ' from qils_location_mst_tbl t ';
        query += ' where 1 = 1 ';
        if(locationpk > 0)
        {
          query += ' and t.location_mst_pk = ' + locationpk + '';
        }
        query += ' order by t.location_name';
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

exports.fetchQPORTTerList =  async (req, res, next) => {
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