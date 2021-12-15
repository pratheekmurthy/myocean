const database = require('../services/database')

exports.fetchDropdown = async (req, res, next) => {
    let searchflag = req.query.searchflag
    let param3 = req.query.param3
    let param4 = req.query.param4

    let query = `select b.pk, b.id, b.name, b.name as "text", b.preference, b.type as "columnCaption" from qport_dropdown_values b where b.is_active = 1 and b.form_fk = 1 and lower(b.type) = lower('CompanyType')`
}