// Question 1

// const prompt = require("prompt-sync")();
// let salary = prompt("Do you get salary (yes/no): ");
// let sales = prompt("enter sales: ");
// salary = parseInt(salary);
// sales = parseInt(sales);


// if(salary === "yes"){
//     if (sales < 300){
//         console.log("No commission")
//     } else if (sales > 300 && sales < 500){
//         console.log(`commission = ${sales * 0.01}`)
//     }else if (sales > 500){
//         console.log(`commission = ${sales * 0.02}`)
//     }
// } else {
//     if (sales < 300){
//         console.log("enter valid number")
//     }else if (sales > 300 && sales < 500){
//         console.log(`commission = ${sales * 0.02}`)
//     }else if (sales > 500){
//         console.log(`commission = ${sales * 0.03}`)
//     }
// }
// ************************************//******************************

// Question 2
// const prompt = require("prompt-sync")();
// let age = prompt("how old are you: ");;
// age = parseInt(age);

// while(age <= 18){
//     age = prompt("how old are you: ");
// }
// console.log(age);

// do
//     age = prompt("how old are you: ");
// while(age <= 18){
//     age = prompt("how old are you: ");
// }
// console.log(age);
// ************************************//******************************

//Question 3
// const prompt = require("prompt-sync")();
// let initialAmount = prompt("enter initial amount: ");
// let interestRate = prompt("enter annual interest rate: ");
// let years = prompt("enter number of years to compound: ");
// let finalAmount, n = 12;
// initialAmount = parseInt(initialAmount);
// interestRate = parseInt(interestRate);
// year = parseInt(year);

// interestRate = interestRate * 0.01;
// finalAmount = initialAmount * Math.pow((1 + (interestRate/n)), n * years);

// console.log(finalAmount);
// ************************************//******************************


// Question 4

// let x = ""
// for (let i = 1 ; i <= 5; i++){
//     for (let j = 1 ; j <= 5; j++){
//         x = x + j
//     }
//     console.log(x)
//     x = ""
// }

// let y = ""
// for (let i = 1 ; i <= 5; i++){
//     for (let j = 1 ; j <= 5; j++){
//         y = y + i;
//         if(i === j) break;  
//     }
//     console.log(y)
//     y = ""
// }

// let z = ""
// for (let i = 5 ; i >= 1; i--){
//     for (let j = 1 ; j <= 5; j++){
//         z = z + i;
//         if(i === j) break; 
//     }
//     console.log(z)
//     z = ""
// }
// ************************************//******************************

// Question 5
/*
Defining table
	Input: cost
	Process: apply down payment formula
	Output: down payment
*/
// const prompt = require("prompt-sync")();
// let cost = prompt("What is the cost of your house: ");
// let downPayment;
// cost = parseInt(cost);

// if (cost >= 0 && cost < 50000){
//     downPayment = cost * 0.05;
// } else if (cost >= 50000 && cost < 100000){
//     downPayment = 1000 + 0.1 * (cost - 50000);
// } else if (cost >= 100000 && cost < 200000){
//     downPayment = 2000 + 0.15 * (cost - 100000);
// } else {
//     downPayment = 5000 + 0.1 * (cost - 200000);
// }
// console.log(downPayment);
// ************************************//******************************

// Question 6
// const prompt = require("prompt-sync")();
// let n = prompt("enter an integer: ");
// n = parseInt(n);

// let sum = 0;
// if (n < 10) {
//     sum = n
// } else {
//     while(n){
//         sum = sum + n%10;
//         n = Math.floor(n/10);
//     }
// }
// console.log(sum)
// ************************************//******************************