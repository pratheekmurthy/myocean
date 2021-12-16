const database = require('../services/database')

exports.fetchNotifications =  async (req, res, next) => {}
exports.fetchAlerts =  async (req, res, next) => {}
exports.fetchSignUp =  async (req, res, next) => {}
exports.saveUserDetails =  async (req, res, next) => {}
exports.fetchCountries =  async (req, res, next) => {
    let api_response = {}
    try {
        let query = 'SELECT cont.country_mst_pk AS "pk", cont.country_id AS "id", cont.country_name AS "name", cont.country_name AS "text", 0 AS "Preference" FROM country_mst_tbl cont WHERE cont.active = 1 ORDER BY cont.country_name';
        const output = await database.simpleExecute(query);
            let data = output.rows;
            api_response.Status = 'Success'
            api_response.StatusCode = 'GFS000001'
            api_response.data = data
            res.send(200).json(api_response)
    }
    catch (err) {
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