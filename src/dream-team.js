const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  let names = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for ( let i = 0; i < members.length; i++){
    if (!(typeof members[i] == 'string')){
      continue;
    }
    let member = members[i].trim();
    if (!/^([A-z]+|[A-z]+\s[A-z]+)$/.test(member)){
      continue;
    }
    names.push(member[0].toUpperCase());
  }
  return names.sort().join("");
}

module.exports = {
  createDreamTeam
};
