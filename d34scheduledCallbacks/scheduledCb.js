"use strict";
module.exports = { printNumbers, printNumbers1, printNumbers2 };
/**
 * 
 * @param {Number} from is a number
 * @param {Number} to is a number
 * @returns {undefined} it logs out scheduled output
 */
function printNumbers(from, to) {
    let timerId = setInterval(function() {
        console.log(from);
        if (from == to) {
            clearInterval(timerId);
        }
        from++;
    }, 1000);
}

/**
 * 
 * @param {Number} from is a number
 * @param {Number} to is a number
 * @returns {undefined} it logs out scheduled output
 */
function printNumbers1(from, to) {
    let mytimer = setInterval(function() {
        console.log(from);
      if (from == to) {
        clearInterval(mytimer);
      }
      from++;
    }, from * 1000);
  }
  
  /**
 * 
 * @param {Number} from is a number
 * @param {Number} to is a number
 * @returns {undefined} it logs out scheduled output
 */
function printNumbers2(from, to) {
    setTimeout(function printTimely() {
        console.log(from);
        if (from < to) {
        setTimeout(printTimely, 1000);
        }
        from++;
    }, 1000);
}
