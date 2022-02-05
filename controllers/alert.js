const database = require('../services/database')

exports.alertCount = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.getMessage = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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


exports.createMessage = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.getMessagesForUser = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.getMessageThread = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.deleteMessage = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.clearMessage = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.markRead = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.updateAction = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.getUnReadCount = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //console.log(query);
    const alertCount = await database.simpleExecute(query);
    if (alertCount.rows.length > 0) {
      data = alertCount.rows[0]
    }
    else {
      data = {
        unreadcount : 0
      }
    }
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

exports.getAlertType = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) as "unreadcount"';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
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

exports.getParameters = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) unreadcount';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
    res.status(200).json({
      "Status": "Success",
      "StatusCode": "GFS000001", "Data": lowercaseKeys(data)
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.getMessageTemplate = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) unreadcount';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
    res.status(200).json({
      "Status": "Success",
      "StatusCode": "GFS000001", "Data": lowercaseKeys(data)
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.saveTemplate = async (req, res, next) => {
  const { userpk } = req.query || 0;
  try {
    let query = 'select count(*) unreadcount';
    query += ' from qport_messagelog msg where msg.is_active = 1';
    if (userpk > 0) {
      query += ' and msg.receiver_fk = ' + userpk + '';
    }
    query += ' and msg.read_status = \'Un Read\'';
    query += ' group by msg.receiver_fk, msg.read_status';
    //let bind = [userpk]
    const alertCount = await database.simpleExecute(query);
    data = alertCount.rows[0]
    res.status(200).json({
      "Status": "Success",
      "StatusCode": "GFS000001", "Data": lowercaseKeys(data)
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}




