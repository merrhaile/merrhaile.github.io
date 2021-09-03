"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply, 
                  findLongestWord, reverseArray, 
                  reverseArrayInPlace, scoreExams,
                  generateArray}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(num1, num2, num3){ 
    let temp;
    if(num1 > num2 && num1 > num3){
         temp = num1;
    }else if(num2 > num3 && num2 > num3){
         temp = num2;
    } else {
         temp = num3;
    }
return temp;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot = tot * number;
    }
    return tot;

}


/**
 * 
 * @param {Array} arr is an array of words
 * @returns {number} the length of the longes word
 */
function findLongestWord(arr){
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j < arr[i].length; j++)
            if(arr[i].length > temp){
                temp = arr[i].length;
            }
    }
    return temp;
}


/**
 * 
 * @param {Array} arr has list of numbers, strings ect..
 * @returns {Array} reverse the order elements and pushed to a new array
 */
function reverseArray(arr){
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    
    }
    return arr1;
}


/**
 * 
 * @param {*} arr has list of numbers, strings ect..
 * @returns {Array} reverse the order of elments of the given array
 */
function reverseArrayInPlace(arr){
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    arr = [];
    for (let i = 0 ; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    return arr;
}


/**
 * 
 * @param {Array} studentAnswers is score of students
 * @param {Array} correctAnswers has the correct answers
 * @returns {Array} has the count of the correct of answers
 */
function scoreExams(studentAnswers, correctAnswers){
    let arr = [];
    let count = 0;
    for (let i = 0 ; i < studentAnswers.length; i++) {  
        if(correctAnswers[0] === studentAnswers[i][0]){
            count = count + 1;
        }
        if(correctAnswers[1] === studentAnswers[i][1]){
            count = count + 1;
        }
        if(correctAnswers[2] === studentAnswers[i][2]){
            count = count + 1;
        }
        if(correctAnswers[3] === studentAnswers[i][3]){
            count = count + 1;
        }
        arr.push(count);
        count = 0;   
    }    
return arr;
}

/**
 * 
 * @param {number} num1 is an integer
 * @param {number} num2 s an integer
 * @returns {Array} two dimentional array
 */
function generateArray(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [1,2,3,4,5,6,7,8,9];
    for (let i = 0;i < num1; i++) {
        arr2 = arr3.splice(0,num2);
        arr1.push(arr2);
        arr2 = [];
    }
return arr1;
}
