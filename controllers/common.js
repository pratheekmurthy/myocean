const database = require('../services/database')

exports.fetchGridPref =  async (req, res, next) => {
    const { UserFK } = req.query || 0;
    const { FormFK } = req.query || 0;
    try {
        let query = ' select \'center\' as "columnAlign", ';
        query += ' \'\' as "columnCaption", ';
        query += ' \'terminalLogo\' as "columnName", ';
        query += ' \'\' as "columnTitle", ';
        query += ' \'3rem\' as "columnWidth", ';
        query += ' \'TerminalGrid\' as "controlname", ';
        query += ' \'Grid\' as "controltype", ';
        query += ' null as "dataType", ';
        query += ' 1 as "displayOrder", ';
        query += ' 237 as "fieldConfigFK", ';
        query += ' 30 as "formMasterFK", ';
        query += ' 0 as "gridUserConfigPK", ';
        query += ' \'false\' as "isDisplayMandatory", ';
        query += ' \'true\' as "isEnabled", ';
        query += ' \'false\' as "isMandatory", ';
        query += ' \'true\' as "isVisible", ';
        query += ' 0 as "maxLength", ';
        query += ' 0 as "userMasterFK" ';
        query += ' from dual ';
        
       
        const result = await database.simpleExecute(query);
        data = result.rows
        AccessRights = 15;
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "AccessRights": AccessRights, "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}