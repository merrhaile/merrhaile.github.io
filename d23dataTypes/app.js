"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst,checkSpam, truncate ,extractCurrencyValue, getMaxSubSum, camelize}; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {string} str is any string
 * @returns {string} string
 */
function ucFirst(str) {
    let str1;
    if(str !== ""){
        str1 = str[0].toUpperCase() + str.slice(1);
        return str1;
    } else {
        return str;
    }
}

/**
 * 
 * @param {string} str is any string
 * @returns {string} string
 */
function checkSpam(str) {
    let strLower = str.toLowerCase().split(" ");
    return strLower.includes("viagra") || strLower.includes("xxxxx")
}

/**
 * 
 * @param {string} str is any string
 * @returns {string} truncated string if exceeds max
 */
function truncate(str, maxlength) {
    let strTrunc;
    if(str.length > maxlength){
        strTrunc = str.slice(0, maxlength-1) + '…';
    }else {
        strTrunc = str;
    }
    return strTrunc;
}

/**
 * 
 * @param {string} str is any string
 * @returns {number} number
 */
function extractCurrencyValue(str){
    if(str[0] === "$") {
        return parseInt(str.slice(1));
    } else {
    return parseInt(str);
    }
}



/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
   let sum = 0;
   let maxSum = 0;
   for(let i = 0; i < arr.length; i++){
      sum += arr[i] + arr[i + 1];
      if(sum > maxSum){
          maxSum = sum;
      }
      sum = 0;
   }
 return maxSum;
}

/**
 * 
 * @param {String} str is string of letters and character "-"
 * @returns {String} camelcase string
 */
function camelize(str) {
    let arr = str.split("-");
    let strCamel = [];
    arr.forEach(function(item, index){
       if(index == 0 && item !== ""){
          strCamel.push(item);
       }else{
          strCamel.push(item.substr(0,1).toUpperCase() + item.slice(1));
       }
 
    });
 
    return strCamel.join("");
 }