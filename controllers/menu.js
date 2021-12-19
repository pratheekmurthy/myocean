const database = require('../services/database')
const {lowercaseKeys, turnArraytoLowerCase} = require('../utility/util')
const groupBy = require('lodash/groupBy')

exports.menuList =  async (req, res, next) => {
    const { userpk } = req.query;

    let query = `select x.is_active from qport_favorite_setup x where x.user_fk = :user_fk`
    let bind = [userpk]
    const rCount = await database.simpleExecute(query, bind);
    let Pref = 16
    if(rCount.rows.length > 0){
        let data = rCount.rows[0]
        if(data.IS_ACTIVE == 1)
        Pref = 0
    }

    let query1 = `select distinct case when modulemaster.modmenu_sort_order = 16 then :pref else modulemaster.modmenu_sort_order  end as modmenu_sort_order,  modulemaster.module_id,  modulemaster.modulemaster_pk,  modulemaster.module_name,  modulemaster.module_image,  modulemaster.mod_category,  menumaster.menumasterform_pk,  menumaster.modulemaster_fk,  menumaster.menuform_id,  menumaster.menuform_sort_order,  case  when modulemaster.modmenu_sort_order = 16  and :pref1 = 0  and menumaster.menuform_name = 'Activate' then 'Deactivate'  else menumaster.menuform_name  end as menuform_name,  menumaster.menuform_url,  menumaster.menuform_image,  menumaster.featureform_fk,  menumaster.formmaster_fk,  coalesce(menumaster.login_required,0) as accessflag,  menumaster.menutooltip  from  qport_modulemaster_mf modulemaster  join qport_menumaster_form_mf menumaster on  modulemaster.modulemaster_pk = menumaster.modulemaster_fk  left join qport_useraccess useraccess on  modulemaster.modulemaster_pk = useraccess.modulemaster_fk  left join qport_roleaccess roleaccess on useraccess.modulemaster_fk = roleaccess.modulemaster_fk where 1=1 order by menuform_id`
    let binds = [Pref, Pref]
    const menuList = await database.simpleExecute(query1, binds);
    let menus = menuList.rows;

    temp_data = menus.reduce(function (r, a) {
        r[a.MOD_CATEGORY] = r[a.MOD_CATEGORY] || [];
        r[a.MOD_CATEGORY].push(a);
        return r;
    }, Object.create(null));
    // console.log(result)
    let MCData = temp_data["MC"]
    let HCData = temp_data["HC"]
    let ordered_mc = sortByKey(MCData, "MODMENU_SORT_ORDER")
    let ordered_hc = sortByKey(HCData, "MODMENU_SORT_ORDER")

    temp_data['MC'] = ordered_mc;
    temp_data['HC'] = ordered_hc;
    let sortMCData = sortByKey( temp_data['MC'], "MENUFORM_SORT_ORDER")
    let sortHCData = sortByKey( temp_data['HC'], "MENUFORM_SORT_ORDER")
    delete temp_data['MC']
    delete temp_data['HC']
    let MC = groupBy(sortMCData, function(n) {
        return n.MODULE_ID;
    });
    let HC = groupBy(sortHCData, function(n) {
        return n.MODULE_ID;
    });
    temp_data['MyConnect'] = getSortedMenu(MC);
    temp_data['HelpCenter'] = getSortedMenu(HC);
    let data = lowercaseKeys(temp_data)
    res.status(200).json({data})


}

function sortByKey(array, key) {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }


function getSortedMenu(obj){
    const arr = []

    for (var item in obj){
        let tempObj = {}
        tempObj.modmenu_sort_order = obj[item][0].MODMENU_SORT_ORDER
        tempObj.module_id= obj[item][0].MODULE_ID
        tempObj.modulemaster_pk = obj[item][0].MODULEMASTER_PK
        tempObj.module_name = obj[item][0].MODULE_NAME
        tempObj.menuform_sort_order = obj[item][0].MENUFORM_SORT_ORDER
        tempObj.module_image = obj[item][0].MENUFORM_IMAGE
        tempObj.accessflag = obj[item][0].ACCESSFLAG
        tempObj.childData = getData(JSON.stringify (obj[item]))
        arr.push(tempObj)
    }
    return arr
}

function getData(arr){
    let tempArr = JSON.parse(arr)
    tempArr = turnArraytoLowerCase(tempArr)
    return tempArr;
}