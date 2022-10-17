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
    /*let total = 1;
    let isWorking = true;
    while (isWorking) {
      if (arr.length == 0) {
        break;
      }
      let subtotal = 0;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "object") {
          subtotal++;
        }
      }
      if (subtotal > 0){
          total += subtotal;
          arr = arr.reduce((acc, val) => acc.concat(val), []);
      } else {
          isWorking = false;
      }  
    }
    return total;*/

    if(arr.filter(i => i.constructor.name === "Array").length != 0){
      return 1 + this.calculateDepth([].concat(...arr.filter(i => i.constructor.name === "Array")));
   } else {
      return 1;
   }
  }
}

module.exports = {
  DepthCalculator
};
