"use strict";

let matrix = [ [1, 2, 3], 
            [4, 5, 6],
            [7, 8, 9]];

/**
 * 
 * @param {Array} twoDarray is a 2 dimentional array
 * @returns {number} returns a total of array elements
 */
function sumArray(twoDarray){
    let total = 0;
    for (let i = 0; i < twoDarray.length; i++) {
        for (let j = 0; j < twoDarray[i].length; j++) {
            total = total + twoDarray[i][j];
        }
    }
return total;
}
console.log(sumArray(matrix));