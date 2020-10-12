const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true){
    this.flag = flag;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error ('Error');
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 130) % 26 + 65);
        j++;
      }
      else result += message[i];
    }
    if (this.flag) return result;   
    else return result.split('').reverse().join('');
  }  

  decrypt(message, key) {
    if (!message || !key) throw new Error ('Error');
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      }
      else result += message[i];
    }
    if (this.flag) return result;   
    else return result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
