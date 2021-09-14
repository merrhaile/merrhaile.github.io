"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst,checkSpam, truncate ,extractCurrencyValue, getMaxSubSum, camelize}; //add all of your function names here that you need for the node mocha tests


//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
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

//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
/**
 * 
 * @param {string} str is any string
 * @returns {string} string
 */
function checkSpam(str) {
    let strLower = str.toLowerCase().split(" ");
    return strLower.includes("viagra") || strLower.includes("xxxxx")
}

//Create a function truncate(str, maxlength) that checks the length of the str and, 
//if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
//to make its length equal to maxlength.
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

//We have a cost in the form "$120". That is: the dollar sign goes first, 
//and then the number. Create a function extractCurrencyValue(str) that 
//would extract the numeric value from such string and return it.
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