const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domain = {};
  domains.sort((a, b) => a.length - b.length).map(item => {
    let str = ''
    for (let i = 0; i < item.split('.').reverse().length; i++) {
      str += '.' + item.split('.').reverse()[i];
      str in domain ? domain[str] += 1 : domain[str] = 1;
    }
  });
  return domain;
}

module.exports = {
  getDNSStats
};
