const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) throw new Error ('Error');
  if (arr.length == 0) return [];
  result  = arr.filter(value => value == '--discard-next' || value == '--discard-prev' ||
  value == '--double-prev' || value == '--double-next');
  if (result.length == 0) return arr;
  result = [];
  for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] == 'string'){
        switch(arr[i]){
          case '--discard-next': 
          if (i == arr.length - 1) break;
          i++; break;
          case '--discard-prev': 
          if (i == 0) break;
          if (arr[i - 2] != '--discard-next'){
            result.pop(); 
          }break;
          case '--double-next': 
          if (i == arr.length - 1) break;
          result.push(arr[i+1]); break;
          case '--double-prev': 
          if (i == 0) break;
          if (arr[i - 2] != '--discard-next'){
            result.push(arr[i-1]); 
          }break;
          default: result.push(arr[i]); break;
        }
      } else result.push(arr[i]);
    }
    return result;  
};
