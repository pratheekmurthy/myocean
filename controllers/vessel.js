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
    let query = '';
    try {
        if(CompanyPK ==0)
        {
            query = 'select l.location_mst_pk as "CompanyPK"';
            query += ' from location_mst_tbl l where l.location_type_fk = 1 ';
            const result = await database.simpleExecute(query);
            CompanyPK = result.rows[0].CompanyPK;
        }
        //HeaderList
        query = ' select l.location_mst_pk     as "lany_pk",';
        query += ' l.logo                as "lany_logo",';
        query += ' l.location_id         as "lany_code",';
        query += ' l.location_name       as "lany_name",';
        query += ' lt.location_type_id   as "type",';
        query += ' lt.location_type_desc as "category",';
        query += ' l.br_code             as "lany_reg_no",';
        query += ' l.vat                 as "taxnumber",';
        query += ' l.logo                as "lany_image",';
        query += ' cur.currency_id       as "cur",';
        query += ' l.time_zone           as "timezone"';
        query += ' from location_mst_tbl      l,';
        query += ' location_type_mst_tbl lt,';
        query += ' qils_location_mst_tbl lmt,';
        query += ' country_mst_tbl       cnt,';
        query += ' currency_type_mst_tbl cur';
        query += ' where l.location_type_fk = lt.location_type_mst_pk';
        query += ' and l.qils_location_mst_fk = lmt.location_mst_pk';
        query += ' and lmt.country_mst_fk = cnt.country_mst_pk';
        query += ' and cnt.currency_mst_fk = cur.currency_mst_pk';
        query += ' and l.location_mst_pk = '+ CompanyPK + '';

        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}