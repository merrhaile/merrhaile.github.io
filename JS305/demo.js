"use strict";

// let score = [10, 20, 30, 40, 50];
// let score2 = [];
// for (let i = 0; i <= 10; i++){
//     score2.push(Math.floor(Math.random()* 10));
// }
// console.log(score2);

// /**
//  * 
//  * @param {object} arr is an object
//  * @returns {number} returns the average of the array elements
//  */
// function findAverage(arr){
//     let sum = 0;
//     for(let value of arr){
//         sum = sum + value;
//     }
// return Math.round(sum / arr.length);
// }
// const average = findAverage(score);
// console.log(average);
// const average2 = findAverage(score2);
// console.log(average2);

const exp1 = [ "{", "}", "{", "{", "}", "}" ] ; 
const exp2 = [ "{", "{", "}", "{" ];
const exp3 = [ "{", "[", "{", "(", ")", "}", "]", "}"];

/**
 * 
 * @param {Array} exp is array of brackets --{ or }
 * @returns {Array} an array
 */
function checkBalance(exp){
    const stack = [];
    for (let bracket of exp){
        //if left then push
        if (bracket === "{") {
            stack.push(bracket);
        } else if (bracket === "(") {
            stack.push(bracket);
        }else if (bracket === "["){ 
            stack.push(bracket);
        }
    }
return stack;
}
console.log("expect true: ", checkBalance(exp1));
console.log("expect false: ", checkBalance(exp2));
console.log("expect true: ", checkBalance(exp3));