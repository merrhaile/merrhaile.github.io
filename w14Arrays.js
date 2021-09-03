"use strict";

// function maxOfThree(num1, num2, num3) {
//     let temp;
//     if(num1 > num2 && num1 > num3){
//          temp = num1;
//     }else if(num2 > num3 && num2 > num3){
//          temp = num2;
//     } else {
//          temp = num3;
//     }
// return temp;
// }
// console.log(maxOfThree(1, 3, 6));

// function scoreExams(studentAnswers, correctAnswers){
//     let arr = [];
//     let count = 0;
//     for (let k = 0 ; k < correctAnswers.length; k++){
//         for (let i = 0 ; i < studentAnswers.length; i++) {
//             for (let j = 0 ; j < studentAnswers[i].length; j++) {
//                 if(k === j){
//                     if(correctAnswers[k] === studentAnswers[i][j]){
//                         count = count + 1;
//                     }
//                 } 
//             }

//         }
//         arr.push(count);
//         count = 0; 
//     }
             

// return arr;
// }

// const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]]; 
// const correctAnswers = [3, 1, 2,4];
// console.log(scoreExams(studentAnswers, correctAnswers));

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
console.log(generateArray(3,3));
console.log(generateArray(4,2));
console.log(generateArray(2, 1));