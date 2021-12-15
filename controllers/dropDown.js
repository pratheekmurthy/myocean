const database = require('../services/database')

exports.fetchDropdown = async (req, res, next) => {
    let searchflag = (req.query.searchflag).toUpperCase()
    let param3 = req.query.param3
    let param4 = (req.query.param4).toLowerCase() || 0
    let response;
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
        // case 'PORT':
        //     response = await FetchPort(Param3);
        //     break;
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
    }
}

const FetchDDtable = (p1, p2) => {
    const resp = new Promise( async (resolve, reject) => {
        let api_response = {};
        try{
            let query = `select b.pk, b.id, b.name, b.name as "text", b.preference, b.type as "columnCaption" from qport_dropdown_values b where b.is_active = 1 and b.form_fk = :p1 and lower(b.type) = :p2`;
            let bind = [p1, p2]
            const output = await database.simpleExecute(query, bind);
            let data = output.rows;
            api_response.Status = 'Success'
            api_response.StatusCode = 'GFS000001'
            api_response.data = data
            resolve(api_response)
        }catch(err){
            console.log(err)
            reject(err)
        }

    })
    return resp;
}