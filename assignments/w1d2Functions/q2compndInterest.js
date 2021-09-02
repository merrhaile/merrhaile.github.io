
// Question 2

/* 
Defining Table
    input: initial amount, interest rate, 
        number of time period elapsed (years), number of times interest applied
    process: apply compound formula
    output: monthly compound interest

*/

function compoundInterest(initialAmount, interestRate, years) {
    let finalAmount, n = 12;
    interestRate = interestRate * 0.01;
    finalAmount = initialAmount * (Math.pow((1 + (interestRate/n)), n * years));
    return finalAmount;
}
console.log(compoundInterest(100, 10, 1));