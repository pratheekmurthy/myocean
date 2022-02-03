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
exports.fetchDDPol = async (req, res, next) => {
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
exports.fetchDDPod = async (req, res, next) => {
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
exports.fetchDDVoyage = async (req, res, next) => {
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
exports.fetchDDCommodityGroup = async (req, res, next) => {
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
exports.fetchDDContainerType = async (req, res, next) => {
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
exports.fetchDDCountries = async (req, res, next) => {
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
exports.validContractExists = async (req, res, next) => {
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
exports.fetchMyDetails = async (req, res, next) => {
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
