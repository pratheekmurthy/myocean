const database = require("../services/database");

exports.fetchRegion = async (req, res, next) => {
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
