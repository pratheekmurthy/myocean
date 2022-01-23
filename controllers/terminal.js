const { terminalSchema } = require('../schema/terminal');
const database = require('../services/database');
const { paginatedResults } = require('../utility/util');

exports.getQPORTCntry = async (req, res, next) => {
    const { countrypk } = req.query || 0;
    try {
        let query = ' select c.country_mst_pk as "pk",';
        query += ' c.country_id as "id",';
        query += ' c.country_name as "name"';
        query += ' from country_mst_tbl c';
        query += ' where c.active = 1';
        if (countrypk > 0) {
            query += ' and c.country_mst_pk = ' + countrypk + '';
        }
        query += ' order by c.country_name';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({
            "Status": "Success",
            "StatusCode": "GFS000001", "Data": data
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchQPORTLocList = async (req, res, next) => {
    const { locationpk } = req.query || 0;
    try {
        let query = 'select t.location_mst_pk as "pk",';
        query += ' t.location_id as "id",';
        query += ' t.location_name as "name"';
        query += ' from qils_location_mst_tbl t';
        query += ' where 1 = 1';
        if (locationpk > 0) {
            query += ' and t.location_mst_pk = ' + locationpk + '';
        }
        query += ' order by t.location_name';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({
            "Status": "Success",
            "StatusCode": "GFS000001", "Data": data
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchQPORTTerList = async (req, res, next) => {
    const { CountryPK } = req.query || 0;
    const { LocPK } = req.query || 0;
    try {
        let query = 'select distinct t.terminal_mst_pk as "pk",';
        query += ' t.terminal_id as "id",';
        query += ' t.terminal_name as "name"';
        query += ' from terminal_mst_tbl t, port_mst_tbl p, location_working_ports_trn w';
        query += ' where t.port_mst_fk = p.port_mst_pk';
        query += ' and w.port_mst_fk = p.port_mst_pk';
        if (CountryPK > 0) {
            query += ' and p.country_mst_fk=' + CountryPK + '';
        }
        if (LocPK > 0) {
            query += ' and w.location_mst_fk=' + LocPK + '';
        }
        query += ' order by t.terminal_name';
        const result = await database.simpleExecute(query);
        data = result.rows
        res.status(200).json({
            "Status": "Success",
            "StatusCode": "GFS000001", "Data": data
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.fetchQPORTTerminal = async (req, res, next) => {
    
    const { CntryPK } = req.query || 0;
    const { LocPK } = req.query || 0;
    const { TerPK } = req.query || 0;
    try {
        // let query = 'select distinct ter.terminal_mst_pk as "TerminalmasterPk",';
        // query += ' ter.terminal_id as "TerminalId",';
        // query += ' ter.terminal_name as "TerminalName",';
        // query += ' ter.port_mst_fk as "PortmasterFk",';
        // query += ' port.port_id as "PortCode",';
        // query += ' port.port_name as "PortName",';
        // query += ' null as "UnLocCode",';
        // query += ' null as "SmdgCode",';
        // query += ' null as "AddressLine1",';
        // query += ' null as "AddressLine2",';
        // query += ' null as "AddressLine3",';
        // query += ' port.country_mst_fk as "CountryMstFk",';
        // query += ' coun.country_id as "CountryCode",';
        // query += ' coun.country_name as "CountryName",';
        // query += ' null as "StateName",';
        // query += ' null as "CityName",';
        // query += ' null as "PostCode",';
        // query += ' null as "Phone",';
        // query += ' null as "Email",';
        // query += ' port.no_of_berths as "NoOfBerths",';
        // query += ' null as "QuayLength",';
        // query += ' null as "DraftAlongside",';
        // query += ' port.latitude_max as "Latitude",';
        // query += ' port.longitude_max as "Longitude",';
        // query += ' null as "NoOfGantries",';
        // query += ' null as "ReeferPoints",';
        // query += ' ter.version_no as "VersionNo",';
        // query += ' null as "ContactName",';
        // query += ' null as "ContactNumber",';
        // query += ' null as "Fax",';
        // query += ' null as "Website",';
        // query += ' null as "BillingAddressLine1",';
        // query += ' null as "BillingAddressLine2",';
        // query += ' null as "BillingCity",';
        // query += ' port.port_mst_pk as "BillingCountryMstFk",';
        // query += ' bill.country_id as "BillingCountryCode",';
        // query += ' bill.country_name as "BillingCountryName",';
        // query += ' null as "BillingEmail",';
        // query += ' null as "BillingFax",';
        // query += ' null as "BillingPhone ",';
        // query += ' null as "BillingPostalCode",';
        // query += ' null as "BillingState",';
        // query += ' null as "BillingWebsite ",';
        // query += ' null as "CorporateAddressLine1",';
        // query += ' null as "CorporateAddressLine2",';
        // query += ' null as "CorporateCity",';
        // query += ' null as "CorporateCountryMstFk",';
        // query += ' comm.country_id as "CorporateCountryCode",';
        // query += ' comm.country_name as "CorporateCountryName",';
        // query += ' null as "CorporateEmail",';
        // query += ' null as "CorporateFax",';
        // query += ' null as "CorporatePhone",';
        // query += ' null as "CorporatePostalCode",';
        // query += ' null as "CorporateState",';
        // query += ' null as "CorporateWebsite",';
        // query += ' REGEXP_REPLACE(INITCAP(ter.Terminal_Name), \'[^A-Z]\') AS "TerminalLogo",';
        // query += ' ter.active as "IsActive",';
        // query += ' null as "isBillingSame",';
        // query += ' null as "isCorpSame",';
        // query += ' ter.created_by_fk as "CreatedByFk",';
        // query += ' ter.created_dt as "CreatedOn",';
        // query += ' ter.last_modified_by_fk as "LastUpdatedByFk",';
        // query += ' ter.last_modified_dt as "LastUpdatedOn",';
        // query += ' (select c.currency_id';
        // query += ' from currency_type_mst_tbl c';
        // query += ' where c.currency_mst_pk = coun.country_mst_pk) as "currencyName",';
        // query += ' null as "timezoneVal",';
        // query += ' null as "callingCode"';
        // query += ' from terminal_mst_tbl ter';
        // query += ' join port_mst_tbl port';
        // query += ' on ter.port_mst_fk = port.port_mst_pk';
        // query += ' join country_mst_tbl coun';
        // query += ' on port.country_mst_fk = coun.country_mst_pk';
        // query += ' join location_working_ports_trn loc';
        // query += ' on port.port_mst_pk = loc.port_mst_fk';
        // query += ' join country_mst_tbl bill';
        // query += ' on port.country_mst_fk = bill.country_mst_pk';
        // query += ' join country_mst_tbl comm';
        // query += ' on port.country_mst_fk = comm.country_mst_pk';
        // query += ' join terminal_mst_tbl cont';
        // query += ' on ter.terminal_mst_pk = cont.terminal_mst_pk';
        // query += ' where ter.active = 1';
        let query = ' select distinct ter.terminal_mst_pk as "TerminalmasterPk",';
        query += ' ter.terminal_id as "TerminalId",';
        query += ' ter.terminal_name as "TerminalName",';
        query += ' ter.port_mst_fk as "PortmasterFk",';
        query += ' port.port_id as "PortCode",';
        query += ' port.port_name as "PortName",';
        query += ' lmt.location_id as "UnLocCode",';
        query += ' cont.name as "ContactName",';
        query += ' cont.mobile as "ContactNumber",';
        query += ' nvl(ter.max_draft, port.max_draft) as "DraftAlongside",';
        query += ' nvl(ter.max_loa, port.max_loa) as "QuayLength",';
        query += ' nvl(ter.No_Of_Gantries, port.No_Of_Gantries) as "NoOfGantries",';
        query += ' (select c.currency_id';
        query += ' from currency_type_mst_tbl c, country_mst_tbl cnt';
        query += ' where c.currency_mst_pk = cnt.currency_mst_fk';
        query += ' and cnt.country_mst_pk = lmt.country_mst_fk) as "currencyName",';
        query += ' port.latitude_max as "Latitude",';
        query += ' port.longitude_max as "Longitude",';
        query += ' lmt.time_zone as "timezoneVal",';
        query += ' cnt.country_code1 as "callingCode",';
        query += ' REGEXP_REPLACE(INITCAP(ter.Terminal_Name), \'[^A-Z]\') AS "TerminalLogo"';
        query += ' from terminal_mst_tbl ter';
        query += ' join port_mst_tbl port';
        query += ' on ter.port_mst_fk = port.port_mst_pk';
        query += ' join location_working_ports_trn loc';
        query += ' on port.port_mst_pk = loc.port_mst_fk';
        query += ' join qils_location_mst_tbl lmt';
        query += ' on loc.location_mst_fk = lmt.location_mst_pk';
        query += ' left join terminal_contact_dtl cont';
        query += ' on ter.terminal_mst_pk = cont.terminal_mst_fk';
        query += ' join country_mst_tbl cnt';
        query += ' on lmt.country_mst_fk = cnt.country_mst_pk';
        if (TerPK > 0) {
            query += ' and ter.terminal_mst_pk=' + TerPK + '';
        }
        if (CntryPK > 0) {
            query += ' and port.country_mst_fk=' + CntryPK + '';
        }
        if (LocPK > 0) {
            query += ' and lmt.location_mst_pk=' + LocPK + '';
        }
        query += ' order by ter.terminal_name';
        //console.log(query);
        const result = await paginatedResults(query, req, res);
        data = result.rows
 
        // query = ' select null as "ContactName",';
        // query += ' null as "DepartmentmasterFk",';
        // query += ' null as "DepartmentCode",';
        // query += ' null as "DepartmentName",';
        // query += ' null as "DesignationFk",';
        // query += ' null as "DesignationCode",';
        // query += ' cont.designation as "DesignationName",';
        // query += ' cont.email as "EmailId",';
        // query += ' null as "IsKeycontact",';
        // query += ' cont.mobile as "MobileNo",';
        // query += ' cont.phone as "PhoneNo",';
        // query += ' cont.ter_contact_dtl_pk as "TerminalcontactPk",';
        // query += ' cont.terminal_mst_fk as "TerminalmasterFk"';
        // query += ' from terminal_contact_dtl cont';
        
        // const tercontacts = await database.simpleExecute(query);
        // data.terminalcontacts = tercontacts.rows;

        res.status(200).json({
            "Status": "Success",
            "StatusCode": "GFS000001", "Data": data
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

  