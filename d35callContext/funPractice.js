"use strict";

module.exports = {myMap, myFilter, myReduce};

/**
 * 
 * @param {Array} arr is an array
 * @param {Function} func is a function to be applied to each element of the array
 * @returns {Array} of the same number of elements 
 */
function myMap(arr, func){
    const arrNew = [];
    for(const element of arr){
       arrNew.push(func(element));
    }
    return arrNew;
}

/**
 * 
 * @param {Array} arr is an array
 * @param {Function} func is a filtering function 
 * @returns {Array} of filtered elements 
 */
function myFilter(arr, func){
    const arrNew = [];
    for(const element of arr){
        if(func(element)){
            arrNew.push(element);
        }
    }
    return arrNew;
}


/**
 * 
 * @param {Array} arr is an array
 * @param {Function} func is a reducing function 
 * @param {Number} intial the intial value of the accumulator
 * @returns {Number} reduced result of the elements 
//  */
 function myReduce(arr, func, intial){
    let previous, current;
    let callBack;
    previous = intial ;
    if(arr.length === 0) {
        return "cannot reduce empty array";
    }else if(previous !== undefined) {
        for(let i = 0; i < arr.length; i++){
            current = arr[i];
            callBack = func(previous, current);
            previous = callBack;
        } 
    }
    else {
        [previous, ...arr] = arr;
        for(let i = 0; i < arr.length; i++){
            current = arr[i];
            callBack = func(previous, current);
            previous = callBack;
       } 
    }
       return previous;
}
 
/**
 * 
 * @param {String} name is a string
 * @param {string} value is string
 * @param  {...any} args is an array of children nodes
 * @returns {undefined} it is a constructor function
 */
function TreeNode(name, value, ...args) {  
    this.name = name;
    this.value = value;
    this.chldren = [...args];
}