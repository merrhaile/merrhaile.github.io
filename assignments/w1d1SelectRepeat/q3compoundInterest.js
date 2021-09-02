
//Question 3
const prompt = require("prompt-sync")();
let initialAmount = prompt("enter initial amount: ");
let interestRate = prompt("enter annual interest rate: ");
let years = prompt("enter number of years to compound: ");
let finalAmount, n = 12;
initialAmount = parseInt(initialAmount);
interestRate = parseInt(interestRate);
year = parseInt(year);

interestRate = interestRate * 0.01;
finalAmount = initialAmount * Math.pow((1 + (interestRate/n)), n * years);

console.log(finalAmount);