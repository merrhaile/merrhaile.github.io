"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@param {number} num is a integer
 *@returns {number} double the input
 */
function double(num){
    return num * num;
}


/**
 * @param {number} num is an integer
 * @returns {number} 100 times the input
 */
 function times100(num){
     return Math.pow(num, 100);
 }


/**
 * @param {Array} arr is an array of numbers
 * @param {function} func is a callback function
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func){
    let arr1 = [];
    for(let element of arr) {
        arr1.push(func(element));
    }
return arr1;
}


