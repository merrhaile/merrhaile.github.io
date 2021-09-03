// Question 5
/*
Defining table
	Input: cost
	Process: apply down payment formula
	Output: down payment
*/
const prompt = require("prompt-sync")();
let cost = prompt("What is the cost of your house: ");
let downPayment;
cost = parseInt(cost);

if (cost >= 0 && cost < 50000){
    downPayment = cost * 0.05;
} else if (cost >= 50000 && cost < 100000){
    downPayment = 1000 + 0.1 * (cost - 50000);
} else if (cost >= 100000 && cost < 200000){
    downPayment = 2000 + 0.15 * (cost - 100000);
} else {
    downPayment = 5000 + 0.1 * (cost - 200000);
}
console.log(downPayment);


