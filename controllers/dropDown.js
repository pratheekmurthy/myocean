const database = require('../services/database')

exports.fetchDropdown = async (req, res, next) => {
    let searchflag = (req.query.searchflag).toUpperCase()
    let param3 = req.query.param3 || 0;
    let param4 = req.query.param4 || '';
    let response;
    try {
        switch(searchflag){
            case 'DDVALUE':
                response = await FetchDDtable(param3, param4); 
                break;
            // case 'ACCTYPE':
            //     response = await FetchAccType();
            //     break;
            // case 'OPERATOR':
            //     response = await FetchOperator();
            //     break;
            case 'PORT':
                response = await FetchPort(param3);
                break;
            // case 'LPORT':
            //     response = await FetchPort(Param3);
            //     break;
            // case 'COUNTRY':
            //     response = await FetchCountry();
            //     break;
            // case 'CAPSETTINGS':
            //     response = await FetchCapSettings();
            //     break;
            // case 'DEPT':
            //     response = await FetchDepartment(Param3);
            //     break;
            // case 'DESIG':
            //     response = await FetchDesignation(Param3, Param4);
            //     break;
            // case 'BOUND':
            //     response = await FetchDDtable(Param3, searchflag);
            //     break;
            // case 'OVER BOOKING':
            //     response = await FetchDDtable(Param3, searchflag);
            //     break;
            // case 'SHORT FALL':
            //     response = await FetchDDtable(Param3, searchflag);
            //     break;
        }
        if(response.Status == "Success"){
            res.status(200).json(response)
        }else{
            const error = api_response.error
            error.statusCode = 500;
            throw error;
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}

const FetchDDtable = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = '';
            query += ' select b.pk, b.id, b.name, b.name as "text", ';
            query += ' b.preference, b.type as "columnCaption" from ';
            query += ' qport_dropdown_values b where b.is_active = 1 ';
            if(p1.length > 0)
            {
                query += ' and b.form_fk = '+ p1;
            }
            if(p2.length > 0)
            {
                query += ' and lower(b.type) = lower(\'' + p2 + '\')';
            }
            //let bind = [ ]
            const output = await database.simpleExecute(query);
            let data = output.rows;
            api_response.Status = 'Success'
            api_response.StatusCode = 'GFS000001'
            api_response.data = data
            resolve(api_response)
        }catch(err){
            api_response.Status = 'Failure'
            api_response.error = err
            reject(api_response)
        }
    })
    return resp;
}

const FetchPort = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select port.port_mst_pk as "pk",';
            query += ' port.port_id as "id",';
            query += ' port.port_name as "name",';
            query += ' \'Port\' as "ColumnCaption"';
            query += ' from port_mst_tbl port, ';
            query += ' location_mst_tbl loc, ';
            query += ' location_working_ports_trn lwpt,';
            query += ' country_mst_tbl cntry ';
            query += ' where port.port_mst_pk = lwpt.port_mst_fk';
            query += ' and lwpt.location_mst_fk = loc.location_mst_pk';
            query += ' and loc.country_mst_fk = cntry.country_mst_pk';
            query += ' and port.active = 1';
            query += ' and port.port_type = \'ICD\'';
            if(p1.length > 0)
            {
                query += ' and cntry.country_mst_pk ='+ p1;
            }
            const output = await database.simpleExecute(query);
            let data = output.rows;
            api_response.Status = 'Success'
            api_response.StatusCode = 'GFS000001'
            api_response.data = data
            resolve(api_response)
        }catch(err){
            api_response.Status = 'Failure'
            api_response.error = err
            reject(api_response)
        }
    })
    return resp;
}