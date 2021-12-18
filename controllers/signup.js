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
        const { userpk } = req.query;
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
        query += ' and user1.userpk = ' + userpk + '';

        const userprofile = await database.simpleExecute(query);
        data = userprofile.rows[0];

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
        query += ' left join (select * from qport_user_notify n where n.userfk = ' + userpk + ') usr ';
        query += ' on qdv.id = usr.notify_desc_ifk ';
        query += ' where qdv.type = \'Notifications\' ';
        query += ' order by qdv.preference ';
        
        const notificationdtl = await database.simpleExecute(query);
        notificationdtl = lowercaseKeys(notificationdtl.rows[0])
        data.notificationdtl = notificationdtl

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
        data.alertdtl = alertdtl.rows
        let lowerdata =  lowercaseKeys(data);
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": lowerdata})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
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
exports.fetchLocations =  async (req, res, next) => {
    try {
        const { countrypk } = req.query;
        let query = ' select loc.location_mst_pk as "pk", ';
        query += ' loc.location_id     as "id", ';
        query += ' loc.location_name   as "name", ';
        query += ' loc.location_name   as "text", ';
        query += ' 0                   as "peference" ';
        query += ' from country_mst_tbl cmt, location_mst_tbl loc ';
        query += ' where loc.country_mst_fk = cmt.country_mst_pk ';
        query += ' and cmt.active = 1';
        if(countrypk.length > 0)
        {
            query += ' and cmt.country_mst_pk = '+ countrypk;
        }
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
        let query = ' select cmt.customer_mst_pk as "pk", ';
        query += ' cmt.customer_id     as "id", ';
        query += ' cmt.customer_name   as "name", ';
        query += ' cmt.customer_name   as "text", ';
        query += ' 0                   as "peference" ';
        query += ' from customer_mst_tbl      cmt, ';
        query += ' location_mst_tbl      lmt, ';
        query += ' location_type_mst_tbl ltmt ';
        query += ' where cmt.qils_location_mst_fk = lmt.location_mst_pk ';
        query += ' and lmt.location_type_fk = ltmt.location_type_mst_pk ';
        query += ' and cmt.isactive = 1 ';
        query += ' and ltmt.location_type_id = \'HQ\' ';
        query += ' order by cmt.customer_name ';

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
exports.fetchCustomer =  async (req, res, next) => {
    try {
        const { custpk } = req.query;
        let query = ' select cmt.customer_mst_pk as "pk", ';
        query += ' cmt.customer_id     as "id", ';
        query += ' cmt.customer_name   as "name", ';
        query += ' cmt.customer_name   as "text", ';
        query += ' 0                   as "peference" ';
        query += ' from customer_mst_tbl cmt, location_mst_tbl lmt ';
        query += ' where cmt.qils_location_mst_fk = lmt.location_mst_pk ';
        query += ' and cmt.isactive = 1 ';
        if(custpk.length > 0)
        {
            query += ' and cmt.customer_mst_pk = '+ custpk;
        }
        query += ' order by cmt.customer_name ';

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
exports.fetchDesignation =  async (req, res, next) => {
    try {
        let query = ' select dmt.designation_mst_pk as "pk", ';
        query += ' dmt.designation_id     as "id", ';
        query += ' dmt.designation_name   as "name", ';
        query += ' dmt.designation_name   as "text", ';
        query += ' 0                      as "peference" ';
        query += ' from designation_mst_tbl dmt ';
        query += ' where dmt.isactive = 1 ';
        query += ' order by dmt.designation_name ';
        
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
exports.validateEmail =  async (req, res, next) => {
    try {
        const { email } = req.query;
        let query = ' select count(*) ecnt';
        query += ' from qport_user_profile q ';
        query += ' where lower(q.contact_email_add) = lower(\''+ email + '\')';
        
        const cnt = await database.simpleExecute(query);
        data = cnt.rows[0].ECNT;
        if(data == 0)
        {
            res.status(200).json({ "Status": "Error",
            "StatusCode": "GFE000009", "data": email})
        }
        else
        {
            res.status(200).json({ "Status": "Success",
            "StatusCode": "GFE000001", "data": email})
        }
        
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.validateMobile =  async (req, res, next) => {
    try {
        const { mobile } = req.query;
        let query = ' select count(*) ecnt';
        query += ' from qport_user_profile q ';
        query += ' where trim(q.contact_mob_phone_no) = trim(\''+ mobile + '\')';
        
        const cnt = await database.simpleExecute(query);
        data = cnt.rows[0].ECNT;
        if(data == 0)
        {
            res.status(200).json({ "Status": "Error",
            "StatusCode": "GFE000009", "data": mobile})
        }
        else
        {
            res.status(200).json({ "Status": "Success",
            "StatusCode": "GFE000001", "data": mobile})
        }
        
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.inviteColleague =  async (req, res, next) => {}

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
}, {});


const turnArraytoLowerCase = (arr) => {
    let tempArr = []
    for(let i = 0; i<arr.length; i++){
        let convertedobj = arr[i]
    }
}

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