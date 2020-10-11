const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '||';
  if (options.repeatTimes == undefined) return result = str + options.addition;
  for (let i = 0; i < options.repeatTimes; i++){
    let additionSeparator = options.additionSeparator;
    let additionString = '';
    if (i == options.repeatTimes - 1) options.separator = '';
    for (let j = 0; j < options.additionRepeatTimes; j++){
      if (j == options.additionRepeatTimes - 1) additionSeparator = '';
      additionString = additionString + options.addition + additionSeparator;
    }
    result = result + str + additionString + options.separator;
  }
  return result;
};
  