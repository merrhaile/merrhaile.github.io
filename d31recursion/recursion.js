"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

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
 * @param {Object} list is a linkedlist
 * @returns {undefined} prints out list value loop version
 */
function outputListLoop (list){
    let arr = [];
    while(list){
        arr.push(list.value);
        list = list.next;
    }
    return arr.join(" ") + " printed to console";
}

/**
 * 
 * @param {Object} list is a linkedlist
 * @returns {undefined} prints out list value recursion version
 */
 function outputList (list){
    arr1.push(list.value);
    list = list.next;
    if(list) outputList(list);
    return arr1.join(" ") + " printed to console";
}
const arr1 = [];

/**
 * 
 * @param {Object} list is a linkedlist
 * @returns {undefined} prints out reverse values of list loop version
 */
function reverseListLoop (list){
    let arr = [];
    while(list){
        arr.unshift(list.value);
        list = list.next;
    }
    return arr.join(" ") + " printed to console";
}

/**
 * 
 * @param {Object} list is a linkedlist
 * @returns {undefined} prints out reverse values of list recursion version
 */
function reverseList(list){   
    arr.unshift(list.value);
    list = list.next;
    if(list) reverseList(list);

    return arr.join(" ") + " printed to console";
}
const arr = [];

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