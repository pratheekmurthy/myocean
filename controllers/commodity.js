const { string } = require('joi');
const database = require('../services/database')

exports.fetchQPORTCommGrp = async (req, res, next) => {
    const { SearchValue } = req.query || 0;
    try {
        let query = ' select cg.commodity_group_pk   as "commoditymasterpk",';
        query += ' cg.commodity_group_code as "commoditycodeifk",';
        query += ' cg.commodity_group_desc as "commodityname"';
        query += ' from commodity_group_mst_tbl cg';
        query += ' where cg.isactive = 1';
        query += ' order by cg.commodity_group_code';
        const result = await database.simpleExecute(query);
        data = result.rows;
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

exports.fetchQPORTCommodityList = async (req, res, next) => {
    const { CommGrpPK, HSCode, commName, FuzzySearch } = req.query || '';
    try {
        let { TempHSCode, TempCommName, TempFSearch } = "";
        if (HSCode!=null && HSCode!="")
        {
            TempHSCode = HSCode.toUpperCase();
        }
        if (commName!=null && commName!="")
        {
            TempCommName = commName.toUpperCase();
        }
        if (FuzzySearch!=null && FuzzySearch!="")
        {
            TempFSearch = FuzzySearch.toUpperCase();
        }
        let query = ' select c.commodity_mst_pk as "commoditymasterpk",';
        query += ' c.commodity_id as "hscode",';
        query += ' c.commodity_name as "commodityname",';
        query += ' c.commodity_group_fk as "commoditygroupifk",';
        query += ' cg.commodity_group_desc as "CommodityGroup",';
        query += ' c.un_no as "unnumber",';
        query += ' c.imdg_class_code as "imdgclass",';
        query += ' c.imdg_class_code as "imdgcode",';
        query += ' c.hazardous as "reefertype",';
        query += ' \'\' as "mintemp",';
        query += ' \'\' as "maxtemp",';
        query += ' c.commodity_mst_pk as "commoditymasterfk",';
        query += ' 0 as "allow_delete"';
        query += ' from commodity_mst_tbl c, commodity_group_mst_tbl cg';
        query += ' where c.isactive = 1';
        query += ' and cg.isactive = 1';
        query += ' and cg.commodity_group_pk = c.commodity_group_fk';
        if(CommGrpPK > 0)
        {
            query += ' and cg.commodity_group_pk = ' + CommGrpPK + '';
        }
        if(TempHSCode)
        {
            query += ' and upper(c.commodity_id) like \'%' + TempHSCode + '%\'';
        }
        if(TempCommName)
        {
            query += ' and upper(c.commodity_name) like \'%' + TempCommName + '%\'';
        }
        if(TempFSearch)
        {
            query += ' and (upper(c.commodity_id) like \'%' + TempFSearch + '%\' or';
            query += ' upper(c.commodity_name) like \'%' + TempFSearch + '%\')';
        }
        query += ' order by c.commodity_id';
        //console.log(query);
        const result = await database.simpleExecute(query);
        data = result.rows;
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

