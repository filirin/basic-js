const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!!date == false) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }

  if (getMethods(date).length !== getMethods(new Date()).length) {
    throw Error('Invalid date!');
  }

  let month = date.getMonth();
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  for (let i = 0; i < seasons.length; i++) {
    if (month === i) {
      return seasons[i];
    }
  }
}

function getMethods(obj) {
  let res = [];
  for (let m in obj) {
    if (typeof obj[m] == "function") {
      res.push(m)
    }
  }
  return res;
}

module.exports = {
  getSeason
};
