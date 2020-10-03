const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!Array.isArray(array)) return false;
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (typeof array[i] === 'string'){
      result.push(array[i].trim().charAt(0).toUpperCase());
    }
  }
  return result.sort().join('');
};
