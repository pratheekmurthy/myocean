const database = require('../services/database')

exports.fetchNotifications =  async (req, res, next) => {
    try {
        let query = ' select dv.pk as "pk", ';
        query += ' dv.id         as "id", ';
        query += ' dv.name       as "name", ';
        query += ' null          as "imagefile", ';
        query += ' null          as "columnCaption", ';
        query += ' dv.preference as "preference", ';
        query += ' dv.name       as "text", ';
        query += ' dv.type       as "type" ';
        query += ' from qport_dropdown_values dv ';
        query += ' where dv.form_fk = 1 ';
        query += ' and dv.type = \'Notifications\' ';
        query += ' order by dv.preference ';
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
        let query = 'select dv.pk as "pk", ';
        query += ' dv.id         as "id", ';
        query += ' dv.name       as "name", ';
        query += ' null          as "imageFile",  ';
        query += ' null          as "columnCaption", ';
        query += ' dv.preference as "preference", ';
        query += ' dv.name       as "text", ';
        query += ' dv.type       as "type" ';
        query += ' from qport_dropdown_values dv ';
        query += ' where dv.form_fk = 1 ';
        query += ' and dv.type = \'Alerts\' ';
        query += ' order by dv.preference ';
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
exports.fetchSignUp =  async (req, res, next) => {
    try {
        //User Profile
        let query = ' select user1.userpk, ';
        query += ' user1.salutation_ifk, ';
        query += ' user1.dob, ';
        query += ' user1.first_name, ';
        query += ' user1.last_name, ';
        query += ' user1.gen_country_fk, ';
        query += ' user1.gen_location_fk, ';
        query += ' user1.company_type, ';
        query += ' user1.company_name, ';
        query += ' user1.company_cus_ref_no, ';
        query += ' user1.company_designation, ';
        query += ' user1.company_str_add1, ';
        query += ' user1.company_str_add2, ';
        query += ' user1.company_city, ';
        query += ' user1.company_state, ';
        query += ' user1.company_zipcode, ';
        query += ' user1.company_country_fk, ';
        query += ' user1.contact_email_add, ';
        query += ' user1.contact_comfirm_email_add, ';
        query += ' user1.contact_bus_countrycode, ';
        query += ' user1.contact_bus_area, ';
        query += ' user1.contact_bus_tel_no, ';
        query += ' user1.contact_mob_countrycode, ';
        query += ' user1.contact_mob_phone_no, ';
        query += ' user1.contact_mob_city, ';
        query += ' user1.contact_mob_state, ';
        query += ' user1.contact_mob_zipcode, ';
        query += ' user1.mailing_add_str_add1, ';
        query += ' user1.mailing_add_str_add2, ';
        query += ' user1.mailing_add_city, ';
        query += ' user1.mailing_add_state, ';
        query += ' user1.mailing_add_zipcode, ';
        query += ' \'Welcome@2021\' as login_password, ';
        query += ' \'Welcome@2021\' as login_confirm_password, ';
        query += ' user1.login_otp_by, ';
        query += ' user1.notification_required, ';
        query += ' user1.alert_required, ';
        query += ' user1.recommended, ';
        query += ' user1.recommended_emails, ';
        query += ' user1.subscribed, ';
        query += ' user1.terms_conditions, ';
        query += ' cm.country_name as gen_countyname, ';
        query += ' companycountry.country_name as company_countryname, ';
        query += ' \'\' as contract_countryname, ';
        query += ' mailingcompany.country_name as mailing_countryname, ';
        query += ' user1.cust_fk, ';
        query += ' user1.mailing_add_country_fk, ';
        query += ' user1.copy_mailing_address, ';
        query += ' user1.owner_type ';
        query += ' from qport_user_profile user1 ';
        query += ' left join country_mst_tbl cm ';
        query += ' on user1.gen_country_fk = cm.country_mst_pk ';
        query += ' left join country_mst_tbl companycountry ';
        query += ' on user1.company_country_fk = companycountry.country_mst_pk ';
        query += ' left join country_mst_tbl mailingcompany ';
        query += ' on user1.mailing_add_country_fk = mailingcompany.country_mst_pk ';
        query += ' where 1 = 1 ';

        const userprofile = await database.simpleExecute(query);
        data = userprofile.rows

        //Notifications
        query = ' select coalesce(usr.usernotifypk, 0) as usernotifypk, ';
        query += ' coalesce(usr.userfk, 0) as userfk, ';
        query += ' coalesce(usr.notify_desc_ifk, qdv.id) as notify_desc_ifk, ';
        query += ' coalesce(usr.isselected, 0) as isselected, ';
        query += ' usr.is_active, ';
        query += ' usr.created_by_fk, ';
        query += ' usr.created_on, ';
        query += ' usr.last_updated_by_fk, ';
        query += ' usr.last_updated_on ';
        query += ' from qport_dropdown_values qdv ';
        query += ' left join (select * from qport_user_notify n where n.userfk = 0) usr ';
        query += ' on qdv.id = usr.notify_desc_ifk ';
        query += ' where qdv.type = \'Notifications\' ';
        query += ' order by qdv.preference ';
        
        const notificationdtl = await database.simpleExecute(query);
        data = notificationdtl.rows


        query = ' select coalesce(usr.usernotifypk, 0) as usernotifypk, ';
        query += ' coalesce(usr.userfk, 0) as userfk, ';
        query += ' coalesce(usr.notify_desc_ifk, qdv.id) as notify_desc_ifk, ';
        query += ' coalesce(usr.isselected, 0) as isselected, ';
        query += ' usr.is_active, ';
        query += ' usr.created_by_fk, ';
        query += ' usr.created_on, ';
        query += ' usr.last_updated_by_fk, ';
        query += ' usr.last_updated_on ';
        query += ' from qport_dropdown_values qdv ';
        query += ' left join (select * from qport_user_notify n where n.userfk = 0) usr ';
        query += ' on qdv.id = usr.notify_desc_ifk ';
        query += ' where qdv.type = \'Alerts\' ';
        query += ' order by qdv.preference ';
        
        const alertdtl = await database.simpleExecute(query);
        data = alertdtl.rows

        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.saveUserDetails =  async (req, res, next) => {}
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
exports.fetchLocations =  async (req, res, next) => {
    try {
        const { countryfk } = req.query;
        let query = ' select loc.location_mst_pk as "pk", ';
        query += ' loc.location_id     as "id", ';
        query += ' loc.location_name   as "name", ';
        query += ' loc.location_name   as "text", ';
        query += ' 0                   as "peference" ';
        query += ' from country_mst_tbl cmt, location_mst_tbl loc ';
        query += ' where loc.country_mst_fk = cmt.country_mst_pk ';
        if(countryfk.length > 0)
        {
            query += ' and cmt.active = '+ countryfk;
        }
        query += ' and cmt.country_mst_pk = 1 ';
        query += ' order by loc.location_name ';

        const dropdown = await database.simpleExecute(query);
        data = dropdown.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.fetchMloCompanies =  async (req, res, next) => {
    try {
        const { countryfk } = req.query;
        let query = ' select loc.location_mst_pk as "pk", ';
        query += ' loc.location_id     as "id", ';
        query += ' loc.location_name   as "name", ';
        query += ' loc.location_name   as "text", ';
        query += ' 0                   as "peference" ';
        query += ' from country_mst_tbl cmt, location_mst_tbl loc ';
        query += ' where loc.country_mst_fk = cmt.country_mst_pk ';
        if(countryfk.length > 0)
        {
            query += ' and cmt.active = '+ countrypk;
        }
        query += ' and cmt.country_mst_pk = 1 ';
        query += ' order by loc.location_name ';

        const dropdown = await database.simpleExecute(query);
        data = dropdown.rows
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
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