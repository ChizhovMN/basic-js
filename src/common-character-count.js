const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();

  let count = 0;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] in obj1 ? obj1[arr1[i]] += 1 : obj1[arr1[i]] = 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] in obj2 ? obj2[arr2[i]] += 1 : obj2[arr2[i]] = 1;
  }
  for (let keys in obj1) {
    console.log(keys);
    if (keys in obj2) {
      obj1[keys] > obj2[keys] ? count += obj2[keys] : count += obj1[keys];
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
