const database = require("../services/database");

exports.getUserRuleDropdown = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.fetchUserRuleList = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.fetchUserRuleDetails = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.getUserRuleAndPreference = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.saveUserRules = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.deactivateUserRule = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.deleteUserRule = async (req, res, next) => {
  try {
    let query = ' select sysdate from dual ';
    const result = await database.simpleExecute(query);
    data = result.rows;
    res
      .status(200)
      .json({ Status: "Success", StatusCode: "GFS000001", Data: data });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};