const database = require('../services/database')

exports.fetchNotifications =  async (req, res, next) => {
    try {
        let query = `SELECT dv.pk AS "pk", dv.id AS "id", dv.name AS "name", NULL AS "imageFile", NULL AS "columnCaption", dv.preference AS "preference", dv.name AS "text", dv.type AS "type" FROM qport_dropdown_values dv WHERE dv.form_fk = 1 AND dv.type = 'Notifications' ORDER BY dv.preference`;
        const notification = await database.simpleExecute(query);
        data = notification.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.fetchAlerts =  async (req, res, next) => {
    try {
        let query = `select dv.pk as "pk", dv.id as "id", dv.name as "name", null as "imageFile", null as "columnCaption", dv.preference as "preference", dv.name as "text", dv.type as "type" from qport_dropdown_values dv where dv.form_fk = 1 and dv.type = 'Alert' order by dv.preference`;
        const alerts = await database.simpleExecute(query);
        data = alerts.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.fetchSignUp =  async (req, res, next) => {}
exports.saveUserDetails =  async (req, res, next) => {
    const reqData = req.body;
    if(reqData.userpk == 0)
    response = await insertUserInfo(reqData);
}
exports.fetchCountries =  async (req, res, next) => {
    try {
        let query = `select cont.country_mst_pk as pk, cont.country_id as "id", cont.country_name as "name", cont.country_name as "text", 0 as "Preference" from country_mst_tbl cont where cont.active = 1 order by cont.country_name`
        const countries = await database.simpleExecute(query);
        data = countries.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.fetchLocations =  async (req, res, next) => {}
exports.fetchMloCompanies =  async (req, res, next) => {}
exports.fetchCustomer =  async (req, res, next) => {}
exports.fetchDesignation =  async (req, res, next) => {}
exports.validateEmail =  async (req, res, next) => {}
exports.validateMobile =  async (req, res, next) => {}
exports.inviteColleague =  async (req, res, next) => {}

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

const insertUserInfo = (data) => {
    return new Promise( async (resolve, reject) => {
        let query;
        query = `INSERT INTO qport_user_profile (passwordhash, passwordsalt, email_id, username, is_active, login_password, login_confirm_password) VALUES ("demo","demo", ${data.email_id}, ${data.username}, 1, "demo", "demo")`;
        console.log(query)
        const userInfo = await database.simpleExecute(query, [],{ autoCommit: true});
        console.log(userInfo)
    })
    // return resp
}


const createSql = ``