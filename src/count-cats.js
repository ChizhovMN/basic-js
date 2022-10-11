const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(Array) {
  let cats = 0;
  // for (let i = 0; i < Array.length; i++) {
  //      cats += Array[i].filter(item => item === '^^').length
  // }
  Array.forEach(element => {
    cats += element.filter(item => item === '^^').length
  });
  return cats;
}

module.exports = {
  countCats
};
