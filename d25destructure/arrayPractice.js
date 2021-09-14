"use strict";
// /* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, 
    findEvenNum, findEvenAge, includesEvenNum, includesEvenAge,
    findAgeOver10, includesAgeOver10, sumNumbers, averageNumbers, 
    maxNumbers, maxAge, evenAgeAverage,oddAgeAverage}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Array} double each number in the array
 */
function doubleNums(arr){
    return arr.map(num => num * 2);
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Array} of objects with age doubled
 */
function doubleAges(arr){
    return arr.map(function (item) {
        let obj = {};
        obj.name = item.name;
        obj.age = item.age * 2;
        return obj;
    });
}

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Array} of even numbers
 */
function filterEven(arr){
    return arr.filter(item => (item % 2 === 0));
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Array} filter by age (> 10)
 */
function filterOver10(arr) {
    return arr.filter(item => item.age > 10);

}

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Number} the first even number
 */
function findEvenNum(arr){
    return arr.find(item => (item%2 === 0));
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Object} the object with even age
 */
function findEvenAge(arr){
    return arr.find(item => (item.age %2 ===0));
}

/**
 * 
 * @param {Array} arr is array of numbers
 * @returns {Boolean} true if even number found else false
 */
 function includesEvenNum(arr){
    return arr.reduce( function (bool, item) {
        if (item % 2 === 0) return bool = true;
        else return  bool = false;
    }, false);
    // return arr.includes(item => (item % 2 === 0))
}

/**
 * 
 * @param {Array} arr is array of object
 * @returns {Boolean} true if even age found else false
 */
function includesEvenAge(arr){
    return arr.reduce( function (bool, item) {
        if (item.age % 2 === 0) return bool = true;
        else return  bool = false;
    }, false);
    // return arr.includes(item => (item.age % 2 === 0))
}

/**
 * 
 * @param {Array} arr is arr of objects
 * @returns {Object} the first object with age above 10
 */
function findAgeOver10(arr){
    return arr.find(item => (item.age > 10));
}

/**
 * 
 * @param {Array} arr is array of object
 * @returns {Boolean} true if age above 10 else false
 */
function includesAgeOver10(arr){
    return arr.reduce( function (bool, item) {
        if (item.age > 10) return bool = true;
        else return  bool = false;
    }, false);

    // return arr.includes(item => item.age > 10);
}

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Number} sum of all the array elements
 */
function sumNumbers(arr) {
    return arr.reduce((accum, current) => accum += current, 0);
}

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Number} average of the array elements
 */
function averageNumbers(arr){
    let count = 0;
    let total = arr.reduce(function(sum, current) {
        count++;
        sum += current;
        return sum;
    }, 0);
    return total/count; 
}

/**
 * 
 * @param {Array} arr is an array of numbers
 * @returns {Number} the max number
 */
function maxNumbers(arr) {
    return arr.reduce(function (max, current) {
        if (max < current) max = current;
        return max;
    }, -Infinity);
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Number} the max age
 */
function maxAge(arr) {
    return arr.reduce(function (max, current) {
        if (max < current.age) max = current.age;
        return max;
    },0);
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Number} the average of even ages
 */
function evenAgeAverage(arr) {
    let count = 0;
    let total = arr.map(item => item.age).filter(
        item => item%2===0).reduce(
            function (tot, current) {
                count++;
                tot += current;
                return tot;
        }, 0);
    return total/ count;
}

/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Number} the average of odd ages
 */
function oddAgeAverage(arr) {
    let count = 0;
    let total = arr.map(item => item.age).filter(
        item => item%2 !==0).reduce(
            function (tot, current) {
                count++;
                tot += current;
                return tot;
        }, 0);
    return total/ count;
}