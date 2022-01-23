const database = require('../services/database');

exports.lowercaseKeys = obj => {
  if (obj == undefined) {
    return {}
  }
  else {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] = obj[key];
      return acc;
    }, {});
  }
}

exports.paginatedResults = async (sqlstatement, req, res, next) => {
  let pageSize = parseInt(req.query.pageSize, 10) || 1;
  let currentPage = parseInt(req.query.pageNumber, 1) || 1;

  try {
      let queryCount = 'select count(*) as numRows FROM (' + sqlstatement + ')';
     
      let resultCount = await database.simpleExecute(queryCount);

      // V_TOTALPAGE := FLOOR(V_TOTALRECORDS / M_MASTERPAGESIZE_IN);
      // IF V_TOTALRECORDS MOD M_MASTERPAGESIZE_IN <> 0 THEN
      //   V_TOTALPAGE := V_TOTALPAGE + 1;
      // END IF;
      // IF CURRENTPAGE_IN > V_TOTALPAGE THEN
      //   V_CURRENTPAGE := 1;
      // END IF;
      // IF V_TOTALRECORDS = 0 THEN
      //   V_CURRENTPAGE := 0;
      // END IF;
      // V_LAST         := V_CURRENTPAGE * M_MASTERPAGESIZE_IN;
      // V_START        := (V_CURRENTPAGE - 1) * M_MASTERPAGESIZE_IN + 1;
      // TOTALPAGE_IN   := V_TOTALPAGE;
      // CURRENTPAGE_IN := V_CURRENTPAGE;

      let totalRecord =  resultCount.rows[0].NUMROWS;
      let totalPage = Math.ceil(totalRecord / pageSize);
      if ((totalRecord%totalPage) != 0) 
      {
          totalPage = totalPage + 1;
      }
      if (currentPage > totalPage) 
      {
          currentPage = 1;
      }
      if (totalRecord == 0) 
      {
          currentPage = 0;
      }
      
      let V_LAST = currentPage * pageSize;
      let V_START =  (currentPage - 1) * pageSize + 1;

      console.log('number of pages:', totalPage);

      let mainQuery =  'SELECT * FROM (SELECT ROWNUM SL_NR, Q.*';
      mainQuery += ' FROM (' + sqlstatement + ') Q )';
      mainQuery += ' WHERE SL_NR BETWEEN ' + V_START + ' AND ' + V_LAST + '';

      //console.log(mainQuery);
      let paginatedResults = await database.simpleExecute(mainQuery);

      // let responsePayload = {
      //     results: results
      // };
      // if (page < numPages) {
      //     responsePayload.pagination = {
      //         current: page,
      //         perPage: pageSize,
      //         previous: page > 0 ? page - 1 : undefined,
      //         next: page < numPages - 1 ? page + 1 : undefined
      //     }
      // }
      // else responsePayload.pagination = {
      //     err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
      // }

      pagination = '{"currentPage":' + currentPage + ',"itemsPerPage":' + pageSize + ',"totalItems": ' + totalRecord + ',"endRecord":' + V_LAST + '}';
      res.setHeader('Pagination', pagination);

      return (paginatedResults);
  } catch (err) {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  }
}

function paginatedResultsOld(sqlstatement) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    let query = 'select count(*) from (' + sqlstatement + ')';
    let result = await database.simpleExecute(query);
    let recCount =  result.rows.COUNT[0]

    if (endIndex < recCount) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
    
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    try {
      let mainQuery = 'select * from ';
      let result = await database.simpleExecute(query);
              results.results = await model.find().limit(limit).skip(startIndex).exec()
      //res.paginatedResults = results
      return results;
      next()
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
}

function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}

exports.turnArraytoLowerCase = (arr) => {
  let tempArr = []
  for (let i = 0; i < arr.length; i++) {
    let convertedobj = lowercaseKeys(arr[i])
    tempArr.push(convertedobj);
  }
  return tempArr;
}

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

exports.chkIsNull = (value, type) => {
  if (value) {
    value = value;
  }
  else {
    if (type || type === 0) {
      value = type;
    }
    else {
      value = '';
    }
  }
  return value;
}