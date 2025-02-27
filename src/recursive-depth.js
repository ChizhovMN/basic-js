const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i]
      if (Array.isArray(current)) {
        depth = Math.max(depth, this.calculateDepth(current));
        // depth += 1;
        // this.calculateDepth(current);
      }
    }
    return 1 + depth;;
  }
}

module.exports = {
  DepthCalculator
};
