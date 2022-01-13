const database = require('../services/database')

exports.fetchDropdown = async (req, res, next) => {
    let searchflag = (req.query.searchflag).toUpperCase()
    let Param3 = req.query.Param3 || 0;
    let Param4 = req.query.Param4 || '';
    let response;
    try {
        switch(searchflag){
            case 'DDVALUE':
                response = await FetchDDtable(Param3, Param4); 
                break;
            // case 'ACCTYPE':
            //     response = await FetchAccType();
            //     break;
            // case 'OPERATOR':
            //     response = await FetchOperator();
            //     break;
            case 'PORT':
                response = await FetchPort(Param3);
                break;

            case 'LPORT':
                response = await FetchLPort(Param3);
                break;

            case 'COUNTRY':
                response = await FetchCountry();
                break;
                
            case 'CAPSETTINGS':
                //response = await FetchCapSettings();
                response = await FetchDDtable(Param3); 
                break;

            case 'DEPT':
                response = await FetchDepartment(Param3);
                break;

            case 'DESIG':
                response = await FetchDesignation(Param3, Param4);
                break;
            // case 'BOUND':
            //     response = await FetchDDtable(param3, searchflag);
            //     break;
            // case 'OVER BOOKING':
            //     response = await FetchDDtable(param3, searchflag);
            //     break;
            // case 'SHORT FALL':
            //     response = await FetchDDtable(param3, searchflag);
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
exports.FetchAccType = async (req, res, next) => {
    let response;
    try {
        response = await FetchAccType();
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
            query += ' select b.pk as "pk", b.id as "id",';
            query += ' b.name as "name", b.name as "text",';
            query += ' b.preference as "preference", b.type as "columnCaption" from';
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
            api_response.Data = data
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

const FetchLPort = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select port.port_mst_pk as "pk",';
            query += ' port.port_id as "id",';
            query += ' port.port_name as "name",';
            query += ' \'Port\' as "ColumnCaption"';
            query += ' from port_mst_tbl port, ';
            query += ' location_mst_tbl loc, ';
            query += ' location_working_ports_trn lwpt';
            query += ' where port.port_mst_pk = lwpt.port_mst_fk';
            query += ' and lwpt.location_mst_fk = loc.location_mst_pk';
            query += ' and port.active = 1';
            if(p1.length > 0)
            {
                query += ' and loc.location_mst_pk ='+ p1;
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

const FetchCountry = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select cmt.country_mst_pk as "pk",';
            query += ' cmt.country_id as "id",';
            query += ' cmt.country_name as "name",';
            query += ' \'Country\' as "ColumnCaption"';
            query += ' from country_mst_tbl cmt ';
            query += ' where cmt.active = 1 ';
            query += ' order by cmt.country_name ';
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

const FetchDepartment = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select dmt.department_mst_pk as "pk", ';
            query += ' dmt.department_id as "id", ';
            query += ' dmt.department_name as "name", ';
            query += ' \'Department\' as "ColumnCaption" ';
            query += ' from department_mst_tbl dmt ';
            query += ' where dmt.isactive = 1 ';
            query += ' order by dmt.department_name ';
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

const FetchDesignation = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select des.designation_mst_pk as "pk", ';
            query += ' des.designation_id as "id", ';
            query += ' des.designation_name as "name", ';
            query += ' \'Designation\' as "ColumnCaption" ';
            query += ' from department_mst_tbl dmt, ';
            query += ' designation_mst_tbl des, dept_desig_trn ddt ';
            query += ' where dmt.department_mst_pk = ddt.depart_mst_fk ';
            query += ' and ddt.designation_mst_fk = des.designation_mst_pk ';
            query += ' and des.isactive = 1 ';
            if(p2.length > 0)
            {
                query += ' and lower(dmt.department_id) = lower(\'' + p2 + '\')';
            }
            query += ' order by des.designation_name ';
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
const FetchAccType=()=>{
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = ' select a.accounttype_pk as "Pk", ';
            query += ' a.accounttype_id as "Id", ';
            query += ' a.accounttype_name as "Name", ';
            query += ' \'Acc Type\' as "ColumnCaption" ';
            query += ' from accounttype_sf a ';
            query += ' where a.is_active = 1 ';

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