const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const numbers = [];
  const arr = number.toString().split('');
  let arrCopy = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    arrCopy.splice(i, 1);
    numbers.push(arrCopy.join(''));
    arrCopy = arr.slice()
  }
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};
