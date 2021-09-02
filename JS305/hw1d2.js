
// Question 1

// function computeSalesCommission(salary, sales) {
//     if(salary === true){
//         if (sales < 300){
//             console.log("No commission");
//         } else if (sales >= 300 && sales <= 500){
//             console.log(`commission = ${sales * 0.01}`);
//         }else if (sales > 500){
//             console.log(`commission = ${sales * 0.02}`);
//         }
//     } else {
//         if (sales < 300){
//             console.log("No comission");
//         }else if (sales >= 300 && sales <= 500){
//             console.log(`commission = ${sales * 0.02}`);
//         }else if (sales > 500){
//             console.log(`commission = ${sales * 0.03}`);
//         }
//     }

// }
// console.log(computeSalesCommission(false, 300));

//****************************//*************************************
// Question 2

// /* 
// Defining Table
//     input: initial amount, interest rate, 
//         number of time period elapsed (years), number of times interest applied
//     process: apply compound formula
//     output: monthly compound interest

// */
// function compoundInterest(initialAmount, interestRate, years) {
//     let finalAmount, n = 12;
//     interestRate = interestRate * 0.01;
//     finalAmount = initialAmount * (Math.pow((1 + (interestRate/n)), n * years));
//     return finalAmount;
// }
// console.log(compoundInterest(100, 10, 1));

//****************************//*************************************
// Question 3

/*
Defining table
	Input: cost
	Process: apply down payment formula
	Output: down payment
*/
// function calDownpayment(cost){
//     if (cost >= 0 && cost < 50000){
//         downPayment = cost * 0.05;
//     } else if (cost >= 50000 && cost < 100000){
//         downPayment = 2500 + 0.1 * (cost - 50000);
//     } else if (cost >= 100000 && cost < 200000){
//         downPayment = 7500 + 0.15 * (cost - 100000);
//     } else {
//         downPayment = 5000 + 0.1 * (cost - 200000);
//     }
// return downPayment;
// }
// console.log(calDownpayment(100000));
// ************************************//******************************

// Question 4

// function sumDigits(n){
//     let sum = 0;
//     if (n < 10) {
//         sum = n
//     } else {
//         while(n){
//             sum = sum + n%10;
//             n = Math.floor(n/10);
//         }
//     }
// return sum;
// }
// console.log(sumDigits(102))

// function multDigits(n){
//     let product = 1;
//     if (n < 10) {
//         product = n
//     } else {
//         while(n){
//             product *=  n%10;
//             n = Math.floor(n/10);
//         }
//     }
// return product;
// }
// console.log(multDigits(102))
// ************************************//******************************

// Question 5

// function convertFahrenheit(tempCelcius) {
//     let tempFahren;
//     tempFahren = (tempCelcius *9/5) + 32;
//     return tempFahren;
// }
// console.log(convertFahrenheit(0))

// ************************************//******************************

// Question 6

// function calDistance(x1, x2, y1, y2){
//     let distance;
//     distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
//     return Math.round(distance);
// }
// console.log(calDistance(0, 5 , 0, 5))