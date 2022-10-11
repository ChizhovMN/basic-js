const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// const chainMaker = {
//   chain: [],
//   getLength() {
//     return this.length;
//   },
//   addLink(value) {
//     this.chain.push(`( ${value} )`);
//     this.length += 1;
//     return this;
//   },
//   removeLink(position) {
//     try {
//       if (typeof position === "number" && Number.isInteger(position)) {
//         if (position > 0 && position <= this.chain.length) {
//           this.chain.splice(position - 1, 1);
//           console.log(this.chain, this.length);
//           return this;
//         } else {
//           throw new Error;
//         }
//       }
//     } catch (error) {
//       throw new Error(`You can't remove incorrect link!`)
//     }
//   },
//   reverseChain() {
//     this.chain.reverse();
//     return this;
//   },
//   finishChain() {
//     return this.chain.join('~~');
//   }
// };
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position === 'number' && Number.isInteger(position)) {
        if (position > 0 && position <= this.chain.length) {
          this.chain.splice(position - 1, 1);
          return this;
        } else {
          throw new Error()
        }
      } else {
        throw new Error()
      }
    } catch (e) {
      throw new Error(`You can't remove incorrect link!`)
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.join('~~')
  }
}

module.exports = {
  chainMaker
};
