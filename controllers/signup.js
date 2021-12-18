const database = require('../services/database')
const {lowercaseKeys, turnArraytoLowerCase} = require('../utility/util')
const {emailerInfo} = require('../utility/emailConfig')
const sendEmails = require('../utility/emailer')

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
        data = lowercaseKeys(userprofile.rows[0]);

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
        data.notificationdt = turnArraytoLowerCase(notificationdtl.rows)

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
        data.alertdtl = turnArraytoLowerCase(alertdtl.rows)
        
        //let lowerdata =  lowercaseKeys(data);
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}
exports.saveUserDetails =  async (req, res, next) => {
    
    try {
        const reqData = req.body;
        if(reqData.userpk == 0)
        {
            response = await insertUserInfo(reqData);
        }
        data = [];
        res.status(200).json({ "Status": "Success",
        "StatusCode": "GFS000001", "data": data})
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
  
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
exports.inviteColleague =  async (req, res, next) => {
    try{
    const {emailids, userName} = req.body;
    const reciverList = emailids.split(',');
    const output = `<p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px;"><span style="font-size: small;">Dear Customer,</span></p<p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;">We are pleased to communicate with you on behalf of Guaran Feeder S.A.</ span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;">You have been invited by <b>${userName}</b> to register with us and gain access to our E-Commerce Portal, MyConnect.</ span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;">&nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;">MyConnect is a single window for client operations with Guaran Feeder where Mainline Operators, their Agents or Customers to receive real time alerts and notifications, reports and documents, see the progress of your cargo and where access rights are provided, book and manage your shipments.</span></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp;</p >
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> Please click <a href="${emailerInfo.qport_url}/#/home"> here </a> to see the portal </span></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> To accept the invitation, please click on a link below, which will redirect you to our registration screen: </span></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"><a href="${emailerInfo.qport_url}/#/register">${emailerInfo.qport_url }/#/register</a></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> If the verification link cannot be clicked or if parts are cut off, please copy the entire URL into your browser's address bar and press enter. </span></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;">Note: The link expires after 1 week as a security precaution.</ span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp; &nbsp;</span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> Guaran Feeder looks forward to partnering with you, and being part of your success</span></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> &nbsp;</p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> Yours sincerely,</span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> Customer Support </span ></p>
    <p style="box - sizing: border - box; cursor: text; font - family: 'Exo 2', sans - serif!important; white - space: pre - wrap; word - spacing: 0px; text - transform: none; font - weight: 400; color: #567c87; font-style: normal; text-align: left; orphans: 2; widows: 2; margin: 0px; letter-spacing: normal; counter-reset: list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; line-height: 19px; background-color: #fefefe; text-indent: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding: 0px; text-align: justify;"><span style="font-size: small;"> Guaran Feeder S.A. </span ></p>`;

    let response = await sendEmails(emailerInfo.FromUser, reciverList, output, emailerInfo.subject);
    if(response.status){
        res.status(200).json({"Status": "Success",
        "StatusCode": "GFS000001",
        "PKValue": 1})
    }
} catch (err) {
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
}

}


const insertUserInfo = (data) => {
    return new Promise( async (resolve, reject) => {
        let query;
        // query = `INSERT INTO qport_user_profile (passwordhash, passwordsalt, email_id, username, is_active, login_password, login_confirm_password) VALUES ("demo","demo", ${data.email_id}, ${data.username}, 1, "demo", "demo")`;
        // query = `insert into qport_user_profile
        //         (salutation_ifk,
        //         gen_country_fk,
        //         dob,
        //         first_name,
        //         last_name,
        //         gen_location_fk,
        //         company_type,
        //         company_name,
        //         company_cus_ref_no,
        //         company_designation,
        //         company_str_add1,
        //         company_str_add2,
        //         company_country_fk,
        //         company_zipcode,
        //         contact_email_add,
        //         contact_comfirm_email_add,
        //         contact_bus_countrycode,
        //         contact_bus_area,
        //         contact_bus_tel_no,
        //         contact_mob_countrycode,
        //         contact_mob_phone_no,
        //         contact_mob_city,
        //         contact_mob_state,
        //         contact_mob_country_fk,
        //         contact_mob_zipcode,
        //         mailing_add_str_add1,
        //         mailing_add_str_add2,
        //         mailing_add_city,
        //         mailing_add_state,
        //         mailing_add_country_fk,
        //         mailing_add_zipcode,
        //         login_password,
        //         login_confirm_password,
        //         login_otp_by,
        //         notification_required,
        //         alert_required,
        //         recommended,
        //         recommended_emails,
        //         subscribed,
        //         terms_conditions,
        //         is_active,
        //         created_by_fk,
        //         created_on,
        //         passwordhash,
        //         passwordsalt,
        //         username,
        //         login_code_number,
        //         wrong_pwd_count,
        //         enable_otp,
        //         company_fk,
        //         usermaster_pk,
        //         email_id,
        //         mobile_number,
        //         office_number,
        //         rel_mobile_number,
        //         user_image,
        //         alias,
        //         cust_fk,
        //         company_city,
        //         company_state,
        //         copy_mailing_address,
        //         owner_type)
        //     values
        //         (
        //         ''${data.salutation_ifk}'/',
        //         ${data.gen_country_fk},
        //         '${data.dob}',
        //         '${data.first_name}',
        //         '${data.last_name}',
        //         ${data.gen_location_fk},
        //         '${data.company_type}',
        //         '${data.company_name}',
        //         '${data.company_cus_ref_no}',
        //         '${data.company_designation}',
        //         '${data.company_str_add1}',
        //         '${data.company_str_add2}',
        //         ${data.company_country_fk},
        //         '${data.company_zipcode}',
        //         '${data.contact_email_add}',
        //         '${data.contact_comfirm_email_add}',
        //         '${data.contact_bus_countrycode}',
        //         '${data.contact_bus_area},
        //         '${data.contact_bus_tel_no},
        //         '${data.contact_mob_countrycode}',
        //         '${data.contact_mob_phone_no}',
        //         '${data.contact_mob_city}',
        //         '${data.contact_mob_state}',
        //         '${data.contact_mob_country_fk}',
        //         '${data.contact_mob_zipcode}',
        //         '${data.mailing_add_str_add1}',
        //         '${data.mailing_add_str_add2}',
        //         '${data.mailing_add_city}',
        //         '${data.mailing_add_state}',
        //         ${data.mailing_add_country_fk},
        //         '${data.mailing_add_zipcode}',
        //         '${data.login_password}',
        //         '${data.login_confirm_password}',
        //         '${data.login_otp_by}',
        //         '${data.notification_required}',
        //         '${data.alert_required}',
        //         '${data.recommended}',
        //         '${data.recommended_emails}',
        //         '${data.subscribed}',
        //         '${data.terms_conditions}',
        //         ${data.is_active},
        //         ${data.created_by_fk},
        //         sysdate,
        //         '${data.passwordhash}',
        //         '${data.passwordsalt}',
        //         '${data.username}',
        //         '${data.login_code_number}',
        //         '${data.wrong_pwd_count}',
        //         ${data.enable_otp},
        //         ${data.company_fk},
        //         ${data.usermaster_pk},
        //         '${data.email_id}',
        //         '${data.mobile_number}',
        //         '${data.office_number}',
        //         '${data.rel_mobile_number}',
        //         '${data.user_image}',
        //         '${data.alias}',
        //         ${data.cust_fk},
        //         '${data.company_city}',
        //         '${data.company_state}',
        //         '${data.copy_mailing_address}',
        //         '${data.owner_type}')`
        query = ' insert into qport_user_profile ';
        query += ' (salutation_ifk, ';
        query += ' gen_country_fk, ';
        query += ' dob, ';
        query += ' first_name, ';
        query += ' last_name, ';
        query += ' gen_location_fk, ';
        query += ' company_type, ';
        query += ' company_name, ';
        query += ' company_cus_ref_no, ';
        query += ' company_designation, ';
        query += ' company_str_add1, ';
        query += ' company_str_add2, ';
        query += ' company_country_fk, ';
        query += ' company_zipcode, ';
        query += ' contact_email_add, ';
        query += ' contact_comfirm_email_add, ';
        query += ' contact_bus_countrycode, ';
        query += ' contact_bus_area, ';
        query += ' contact_bus_tel_no, ';
        query += ' contact_mob_countrycode, ';
        query += ' contact_mob_phone_no, ';
        query += ' contact_mob_city, ';
        query += ' contact_mob_state, ';
        query += ' contact_mob_country_fk, ';
        query += ' contact_mob_zipcode, ';
        query += ' mailing_add_str_add1, ';
        query += ' mailing_add_str_add2, ';
        query += ' mailing_add_city, ';
        query += ' mailing_add_state, ';
        query += ' mailing_add_country_fk, ';
        query += ' mailing_add_zipcode, ';
        query += ' login_password, ';
        query += ' login_confirm_password, ';
        query += ' login_otp_by, ';
        query += ' notification_required, ';
        query += ' alert_required, ';
        query += ' recommended, ';
        query += ' recommended_emails, ';
        query += ' subscribed, ';
        query += ' terms_conditions, ';
        query += ' is_active, ';
        query += ' created_by_fk, ';
        query += ' created_on, ';
        query += ' passwordhash, ';
        query += ' passwordsalt, ';
        query += ' username, ';
        query += ' login_code_number, ';
        query += ' wrong_pwd_count, ';
        query += ' enable_otp, ';
        query += ' company_fk, ';
        query += ' usermaster_pk, ';
        query += ' email_id, ';
        query += ' mobile_number, ';
        query += ' office_number, ';
        query += ' rel_mobile_number, ';
        query += ' user_image, ';
        query += ' alias, ';
        query += ' cust_fk, ';
        query += ' company_city, ';
        query += ' company_state, ';
        query += ' copy_mailing_address, ';
        query += ' owner_type) ';
        query += ' values ';
        query += ' (\''+ data.salutation_ifk + '\',';
        query += ' \'' + data.gen_country_fk + '\',';
        query += ' \'' + data.dob + '\',';
        query += ' \'' + data.first_name + '\',';
        query += ' \'' + data.last_name + '\',';
        query += ' \'' + data.gen_location_fk + '\',';
        query += ' \'' + data.company_type + '\',';
        query += ' \'' + data.company_name + '\',';
        query += ' \'' + data.company_cus_ref_no + '\',';
        query += ' \'' + data.company_designation + '\',';
        query += ' \'' + data.company_str_add1 + '\',';
        query += ' \'' + data.company_str_add2 + '\',';
        query += ' \'' + data.company_country_fk + '\',';
        query += ' \'' + data.company_zipcode + '\',';
        query += ' \'' + data.contact_email_add + '\',';
        query += ' \'' + data.contact_comfirm_email_add + '\',';
        query += ' \'' + data.contact_bus_countrycode + '\',';
        query += ' \'' + data.contact_bus_area + '\',';
        query += ' \'' + data.contact_bus_tel_no + '\',';
        query += ' \'' + data.contact_mob_countrycode + '\',';
        query += ' \'' + data.contact_mob_phone_no + '\',';
        query += ' \'' + data.contact_mob_city + '\',';
        query += ' \'' + data.contact_mob_state + '\',';
        query += ' \'' + data.contact_mob_country_fk + '\',';
        query += ' \'' + data.contact_mob_zipcode + '\',';
        query += ' \'' + data.mailing_add_str_add1 + '\',';
        query += ' \'' + data.mailing_add_str_add2 + '\',';
        query += ' \'' + data.mailing_add_city + '\',';
        query += ' \'' + data.mailing_add_state + '\',';
        query += ' \'' + data.mailing_add_country_fk + '\',';
        query += ' \''+ data.mailing_add_zipcode + '\',';
        query += ' \'' + data.login_password + '\',';
        query += ' \'' + data.login_confirm_password + '\',';
        query += ' \'' + data.login_otp_by + '\',';
        query += ' \'' + data.notification_required + '\',';
        query += ' \'' + data.alert_required + '\',';
        query += ' \'' + data.recommended + '\',';
        query += ' \'' + data.recommended_emails + '\',';
        query += ' \'' + data.subscribed + '\',';
        query += ' \'' + data.terms_conditions + '\',';
        query += ' \'' + data.is_active + '\',';
        query += ' \'' + data.created_by_fk + '\',';
        query += ' \'' + data.created_on + '\',';
        query += ' \'' + data.passwordhash + '\',';
        query += ' \'' + data.passwordsalt + '\',';
        query += ' \'' + data.username + '\',';
        query += ' \'' + data.login_code_number + '\',';
        query += ' \'' + data.wrong_pwd_count + '\',';
        query += ' \'' + data.enable_otp + '\',';
        query += ' \'' + data.company_fk + '\',';
        query += ' \'' + data.usermaster_pk + '\',';
        query += ' \'' + data.email_id + '\',';
        query += ' \'' + data.mobile_number + '\',';
        query += ' \'' + data.office_number + '\',';
        query += ' \'' + data.rel_mobile_number + '\',';
        query += ' \'' + data.user_image + '\',';
        query += ' \'' + data.alias + '\',';
        query += ' \'' + data.cust_fk + '\',';
        query += ' \'' + data.company_city + '\',';
        query += ' \'' + data.company_state + '\',';
        query += ' \'' + data.copy_mailing_address + '\',';
        query += ' \'' + data.owner_type + '\')';
        console.log(query)
        //const userInfo = await database.simpleExecute(query, [],{ autoCommit: true});
        //console.log(userInfo)
        //res.status(200).json({ "Status": "Error",
        //"StatusCode": "GFE000009", "data": query})
    })
}


const createSql = ``