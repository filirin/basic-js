const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/) {
  /*let ControlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev' ];
  let result = [];

  if (!Array.isArray(arr)) {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }
  
  for (let i = 0; i < arr.length; i++) {    
    
    switch (arr[i]) {
      case ControlSequences[0]:
        if (!!arr[i+1] == true){
            result = arr.splice(i, 2);
        }
        break;
      case ControlSequences[2]:
        if (!!arr[i+1] == true){
            result = arr.splice(i, 1, arr[i+1]);      
        }
        break;
      case ControlSequences[1]:
        if (!!arr[i-1] == true){
          result = arr.splice(i-1, 2);
            }
        break;
      case ControlSequences[3]:
        if (!!arr[i-1] == true){
          result = arr.splice(i, 1, arr[i-1]);
          }
        break;
    }

  }
  return result;*/

  throw new NotImplementedError('Not implemented');
}

module.exports = {
  transform
};
