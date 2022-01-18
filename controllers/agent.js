const database = require('../services/database')

exports.getQPORTCntry =  async (req, res, next) => {
    try {
        let query = ' select con.country_mst_pk as "pk", ';
        query += ' con.country_id     as "id", ';
        query += ' con.country_name   as "name" ';
        query += ' from country_mst_tbl con ';
        query += ' join location_mst_tbl loc ';
        query += ' on con.country_mst_pk = loc.country_mst_fk ';
        query += ' join qils_location_mst_tbl comp ';
        query += ' on loc.location_mst_pk = comp.location_mst_pk ';
        query += ' where loc.active = 1 ';
        query += ' order by con.country_name ';
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

exports.getCompanyDropdown =  async (req, res, next) => {
    try {
        data={};
        let query = ' select loc.location_mst_pk as "PK", ';
        query += ' loc.location_id     as "Id", ';
        query += ' loc.location_name   as "Name" ';
        query += ' from location_mst_tbl loc ';
        query += ' join location_type_mst_tbl loc_type ';
        query += ' on loc.location_type_fk = loc_type.location_type_mst_pk ';
        query += ' and loc_type.location_type_id = \'BO\' ';
        query += ' where loc.active = 1 ';
        query += ' order by loc.location_name ';
        
        const branch = await database.simpleExecute(query);
        data.BranchType = branch.rows;

        query = ' select loc_type.location_type_mst_pk as "PK", ';
        query += ' loc_type.location_type_id     as "Id", ';
        query += ' loc_type.location_type_desc   as "Name" ';
        query += ' from location_type_mst_tbl loc_type ';
        query += ' where loc_type.isactive = 1 ';
        query += ' order by loc_type.location_type_desc ';
        
        const category = await database.simpleExecute(query);
        data.Category = category.rows;
        
        query = ' select c.cost_centre_mst_pk as "PK", ';
        query += ' c.cost_centre_id     as "Id", ';
        query += ' c.cost_centre_name   as "Name" ';
        query += ' from cost_centre_mst_tbl c ';
        query += ' order by c.cost_centre_name ';

        
        const costtype = await database.simpleExecute(query);
        data.CostType = costtype.rows;

        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

exports.FetchQPORTAgentList =  async (req, res, next) => {
    const { countrypk } = req.query || 0;
    try {
        let query = ' select loc.location_mst_pk as "pk", ';
        query += ' loc.location_id     as "id", ';
        query += ' loc.location_name   as "name" ';
        query += ' from country_mst_tbl con ';
        query += ' join location_mst_tbl loc ';
        query += ' on con.country_mst_pk = loc.country_mst_fk ';
        query += ' join qils_location_mst_tbl comp ';
        query += ' on loc.location_mst_pk = comp.location_mst_pk ';
        query += ' where loc.active = 1 ';
        if(countrypk > 0)
        {
        query += ' and (loc.country_mst_fk = 0 or loc.country_mst_fk = null or ';
        query += ' loc.country_mst_fk = '+countrypk+') ';
        }
        query += ' order by loc.location_name ';
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