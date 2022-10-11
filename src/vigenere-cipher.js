const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isOk = true) {
    this.noReverse = isOk;
  }
  encrypt(message, key) {
    if ((message !== '' && !message) || !key) {
      throw new Error(`Incorrect arguments!`);
    } else {
      let newMessage = '',
        newKey = '';
      for (let i = 0; i < message.length; i++) {
        if ((message[i].toLowerCase()).charCodeAt(0) >= 97 && (message[i].toLowerCase()).charCodeAt(0) < 123) {
          newMessage += message[i].toLowerCase();
        }
      }
      let i = 0;
      while (newKey.length < newMessage.length) {
        newKey += key[i];
        i += 1;
        if (i >= key.length) {
          i = 0;
        }
      }
      newKey = newKey.toLowerCase();
      let count = 0;
      let codeMessage = [];
      message.split('').map((item) => {
        item = item.toLowerCase();
        const newItem = newKey[count].charCodeAt(0) + item.charCodeAt(0) - 97;
        if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
          if (newItem > 122) {
            item = String.fromCharCode(newItem - 123 + 97);
            count += 1;
          }
          else {
            item = String.fromCharCode(newItem);
            count += 1;
          }
        }
        if (count === newKey.length) {
          count = 0;
        }
        codeMessage.push(item)
      });
      return this.noReverse ?
        codeMessage.join('').toUpperCase() :
        codeMessage.reverse().join('').toUpperCase();
    }
  }
  decrypt(message, key) {
    if ((message !== '' && !message) || !key) {
      throw new Error(`Incorrect arguments!`);
    } else {
      let newMessage = '',
        newKey = '';
      for (let i = 0; i < message.length; i++) {
        if ((message[i].toLowerCase()).charCodeAt(0) >= 97 && (message[i].toLowerCase()).charCodeAt(0) < 123) {
          newMessage += message[i].toLowerCase();
        }
      }
      let i = 0;
      while (newKey.length < newMessage.length) {
        newKey += key[i];
        i += 1;
        if (i >= key.length) {
          i = 0;
        }
      }
      newKey = newKey.toLowerCase();
      let count = 0;
      const codeMessage = [];
      message.split('').map((item) => {
        item = item.toLowerCase();
        if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
          const newItem = item.charCodeAt(0) - newKey[count].charCodeAt(0) + 97;
          if (newItem < 97) {
            item = String.fromCharCode(newItem + 123 - 97);
            count += 1;
          } else {
            item = String.fromCharCode(newItem);
            count += 1;
          }
        }
        if (count === newKey.length) {
          count = 0;
        }
        codeMessage.push(item)
      });
      return this.noReverse ?
        codeMessage.join('').toUpperCase() :
        codeMessage.reverse().join('').toUpperCase();
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};
