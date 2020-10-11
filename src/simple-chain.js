const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.array.length) {
      this.array = []; 
      throw new Error ('Error');
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;   
  },
  finishChain() {
    let string = this.array.join('~~');
    this.array = [];
    return string;
  }
};

module.exports = chainMaker;
