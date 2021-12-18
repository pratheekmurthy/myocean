
exports.lowercaseKeys = obj =>
Object.keys(obj).reduce((acc, key) => {
  acc[key.toLowerCase()] = obj[key];
  return acc;
}, {});


exports.turnArraytoLowerCase = (arr) => {
  let tempArr = []
  for(let i = 0; i<arr.length; i++){
      let convertedobj = lowercaseKeys(arr[i])
      tempArr.push(convertedobj);
  }
  return tempArr;
}