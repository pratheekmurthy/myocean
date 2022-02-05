const database = require("../services/database");
exports.fetchDDCarrier = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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
exports.fetchDDService = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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

exports.fetchDDPort = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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
exports.fetchDDCustomer = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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
exports.fetchDDCommodity = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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
exports.fetchPeriodicRptList = async (req, res, next) => {
  try {
    let query = " select sysdate from dual ";
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
