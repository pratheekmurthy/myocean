const database = require('../services/database')

exports.fetchGridPref =  async (req, res, next) => {
    const { FormFK } = req.query || 0;
    try {
        let query = 'select 0 "GridUserConfigPK",';
        query += ' fieldconfig.form_fk as "FormMasterFK",';
        query += ' userpref.user_mst_fk as "UserMasterFK",';
        query += ' fieldconfig.fieldconfiguration_pk as "FieldConfigFK",';
        query += ' fieldconfig.columnname as "ColumnName",';
        query += ' fieldcap.columncaption as "ColumnCaption",';
        query += ' fieldcap.columntooltip as "ColumnTitle",';
        query += ' fieldconfig.controlname as "Controlname",';
        query += ' fieldconfig.controltype as "Controltype",';
        query += ' fieldconfig.isenabled as "IsEnabled",';
        query += ' fieldconfig.ismandatory as "IsMandatory",';
        query += ' fieldconfig.maxlength as "MaxLength",';
        query += ' fieldconfig.isdisplaymandatory as "IsDisplayMandatory",';
        query += ' fieldconfig.columnalign as "ColumnAlign",';
        query += ' fieldconfig.columnwidth as "ColumnWidth",';
        query += ' \'true\' as "IsVisible",';
        query += ' fieldconfig.display_order as "DisplayOrder",';
        query += ' fieldconfig.column_datatype as "datatype"';
        query += ' from user_preferences_tbl userpref';
        query += ' join environment_mst_tbl env';
        query += ' on env.environment_mst_pk = userpref.environment_fk';
        query += ' join qport_fieldcaption_mf fieldcap';
        query += ' on env.environment_univ_id = fieldcap.environment_ifk';
        query += ' join qport_fieldconfiguration_mf fieldconfig';
        query += ' on fieldcap.fieldconfiguration_fk = fieldconfig.fieldconfiguration_pk';
        query += ' where userpref.user_mst_fk = 1';
        query += ' and fieldconfig.form_fk = \'' + FormFK + '\'';
        query += ' and fieldconfig.controltype = \'Grid\'';
        query += ' and fieldconfig.isenabled = 1';
        const result = await database.simpleExecute(query);
        data = result.rows
        AccessRights = null;
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "AccessRights": AccessRights, "Data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
          next(err);
    }
}