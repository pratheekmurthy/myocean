
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