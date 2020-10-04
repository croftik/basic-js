const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i of arr){
      let depthAdd = 1;
      if (Array.isArray(i)){
        depthAdd = depthAdd + this.calculateDepth(i);
        if (depthAdd > depth) {
          depth = depthAdd;
        }        
      }
    }
    return depth;
  }
};