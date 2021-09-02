
// Question 3

/*
Defining table
	Input: cost
	Process: apply down payment formula
	Output: down payment
*/
function calDownpayment(cost){
    let downPayment;
    if (cost >= 0 && cost < 50000){
        downPayment = cost * 0.05;
    } else if (cost >= 50000 && cost < 100000){
        downPayment = 2500 + 0.1 * (cost - 50000);
    } else if (cost >= 100000 && cost < 200000){
        downPayment = 7500 + 0.15 * (cost - 100000);
    } else {
        downPayment = 5000 + 0.1 * (cost - 200000);
    }
return downPayment;
}
console.log(calDownpayment(100000));