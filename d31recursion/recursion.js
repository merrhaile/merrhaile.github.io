"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci} // outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} num is an integer
 * @returns {Number} sums from 1 to n
 */
function sumTo(num) {
    if(num === 1) {
        return 1;
    }else{
        return num + sumTo(num - 1);
    }
}

/**
 * 
 * @param {Number} num is an integer
 * @returns {Number} multiplies from 1 to n
 */
function factorial(num) {
    if (num === 1) {
        return 1;
    }else {
      return  num * factorial(num - 1);
    }
}

/**
 * 
 * @param {Number} num is an integer
 * @returns {Number} the nth fibonacci number
 */
function fibonacci(num) {
    if(num <= 1){
        return num;
    }else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

/**
 * 
 * @returns {undefined} it logs a string of name: value of objects
 */
function empNamesValuesLoop() {
    let node = [node1, node2, node3, node4, node5];
    for (const element of node){
      console.log( element.name + ":" + element.value);
    }   
}

/**
 * 
 * @param {Object} obj is an object
 * @returns {undefined} it logs a string of name: value of objects
 */
function empNamesValuesRecur(obj) {
    console.log(obj.name + ":" + obj.value);
    if (obj.children !== null) {
         for(let child of Object.values(obj.children)){
            empNamesValuesRecur(child);
         }
     }
 }

/**
 * 
 * @returns {Array} an array of string(name:value)
 */
 function empNamesValuesLoopArr() {
    let node = [node1, node2, node3, node4, node5];
    let arr = [];
    for (const element of node){
      arr.push(element.name + ":" + element.value);
    }
     return  arr;
}

/**
 * 
 * @param {*} obj is an object
 * @returns an array of string(name:value)
 */
function empNamesValuesRecurArr(obj) {
    let arr1 = [];
    arr1.push(obj.name + ":" + obj.value);
    if (obj.children !== null) {
        for(let child of Object.values(obj.children)){
            empNamesValuesRecurArr(child);
        }
    }

    return arr1;
}