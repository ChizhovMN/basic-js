const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) return str;

  const arr = [];
  const commonArr = [];
  let additionalStr;
  str = String(str);

  additionalStr = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  options.additionRepeatTimes ? options.additionRepeatTimes : options.additionRepeatTimes = 1;

  while (options.additionRepeatTimes > 0) {
    commonArr.push(additionalStr);
    options.additionRepeatTimes -= 1;
  }
  str += commonArr.join(options.additionSeparator ? String(options.additionSeparator) : '|');
  options.repeatTimes ? options.repeatTimes : options.repeatTimes = 1;
  while (options.repeatTimes > 0) {
    arr.push(str)
    options.repeatTimes -= 1;
  }
  return arr.join(options.separator ? String(options.separator) : '+');
}

module.exports = {
  repeater
};
