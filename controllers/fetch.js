const database = require('../services/database')

exports.fetchPOLList = async (req, res, next) => {
    try {
        const { fromportfk } = req.query || 0;
        let query = ' select pmt.port_mst_pk as "portmaster_pk",';
        query += ' pmt.port_name as "port_name",';
        query += ' pmt.port_id as "port_id"';
        query += ' from commercial_schedule_hdr csh,';
        query += ' commercial_schedule_trn cst,';
        query += ' port_mst_tbl pmt';
        query += ' where csh.commercial_schedule_hdr_pk = cst.commercial_schedule_hdr_fk';
        query += ' and cst.port_mst_fk = pmt.port_mst_pk';
        query += ' and pmt.active = 1';
        query += ' and cst.status = 1';
        query += ' and csh.vessel_status <> 2';
        if (fromportfk > 0) {
            query += ' and pmt.port_mst_pk <> ' + fromportfk + '';
        }
        query += ' order by pmt.port_name';
        const fetchPOLList = await database.simpleExecute(query);
        data = fetchPOLList.rows
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

exports.fetchPODList = async (req, res, next) => {
    try {
        const { toportfk } = req.query || 0;
        let query = ' select pmt.port_mst_pk as "portmaster_pk",';
        query += ' pmt.port_name as "port_name",';
        query += ' pmt.port_id as "port_id"';
        query += ' from commercial_schedule_hdr csh,';
        query += ' commercial_schedule_trn cst,';
        query += ' port_mst_tbl pmt';
        query += ' where csh.commercial_schedule_hdr_pk = cst.commercial_schedule_hdr_fk';
        query += ' and cst.npc_fk = pmt.port_mst_pk';
        query += ' and pmt.active = 1';
        query += ' and cst.status = 1';
        query += ' and csh.vessel_status <> 2';
        query += ' and pmt.port_mst_pk <> 1';
        if (toportfk > 0) {
            query += ' and pmt.port_mst_pk <> ' + toportfk + '';
        }
        query += ' order by pmt.port_name';
        const fetchPODList = await database.simpleExecute(query);
        data = fetchPODList.rows
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

exports.fetchTerList = async (req, res, next) => {
    try {
        const { PortFK } = req.query || 0;
        let query = ' select tmt.terminal_mst_pk as "terminalmaster_pk",';
        query += ' tmt.terminal_name as "terminal_name",';
        query += ' tmt.terminal_id as "terminal_id"';
        query += ' from commercial_schedule_hdr csh,';
        query += ' commercial_schedule_trn cst,';
        query += ' terminal_mst_tbl tmt';
        query += ' where csh.commercial_schedule_hdr_pk = cst.commercial_schedule_hdr_fk';
        query += ' and cst.terminal_port_mst_fk = tmt.terminal_mst_pk';
        query += ' and tmt.active = 1';
        query += ' and cst.status = 1';
        query += ' and csh.vessel_status <> 2';
        if (PortFK > 0) {
            query += ' and cst.port_mst_fk=' + PortFK + '';
        }
        query += ' order by tmt.terminal_name';
        const FetchTerList = await database.simpleExecute(query);
        data = FetchTerList.rows
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