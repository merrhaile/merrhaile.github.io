"use strict";

module.exports = {computeSalesCommission, compoundInterest, 
                  calDownpayment, sumDigits, multDigits,
                  convertFahrenheit, calDistance};
//============================================================//

/**
 * @param {boolean} salary is true or false
 * @param {number} sales is number
 * @returns {text} commission
 */
function computeSalesCommission(salary, sales) {
    let commission;
    if (salary === true){
        if (sales < 300){
            return commission = 0;
        } else if (sales >= 300 && sales <= 500){
            return commission = Math.round(sales * 0.01);
        }else if (sales > 500){
            return commission = Math.round(sales * 0.02);
        }
    } else {
        if (sales < 300){
            return commission = 0;
        }else if (sales >= 300 && sales <= 500){
            return commission = Math.round(sales * 0.02);
        }else if (sales > 500){
            return commission = Math.round(sales * 0.03);
        }
    }
return commission;
}
//============================================================//


/**
 * @param {number} initialAmount is a real number
 * @param {number} interestRate is percentage
 * @param {number} years is an integer
 * @returns {number} finalAmount or compound interest 
 */
function compoundInterest(initialAmount, interestRate, years) {
    let finalAmount;
    let months = 12; 
    interestRate = interestRate * 0.01;
    finalAmount = initialAmount * (Math.pow((1 + (interestRate/months)), months * years));
    return Math.round((finalAmount + Number.EPSILON)* 100)/100;
}
//============================================================//

/**
 * @param {number} cost is a real number
 * @returns {number} downpayment
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
//============================================================//

/**
 * 
 * @param {number} num is an integer
 * @returns {number} returns sum of digits
 */
function sumDigits(num){
    let sum = 0;
    if (num < 10) {
        sum = num;
    } else {
        while(num){
            sum = sum + num%10;
            num = Math.floor(num/10);
        }
    }
return sum;
}
//============================================================//

/**
 * 
 * @param {number} num is an integer 
 * @returns {number} returns product of digits
 */
function multDigits(num){
    let product = 1;
    if (num < 10) {
        product = num;
    } else {
        while(num){
            product *=  num%10;
            num = Math.floor(num/10);
        }
    }
return product;
}
//============================================================//


/**
 * 
 * @param {number} tempFahren is a real number
 * @returns {number} converts Fharenheit to Celcius
 */
 function convertFahrenheit(tempFahren) {
    let tempCelcius;
    tempCelcius = (tempFahren - 32) * 5/9;
    return Math.round((tempCelcius + Number.EPSILON) * 10000)/10000;
}
//============================================================//

/**
 * 
 * @param {number} x1 is a co-ordinate (real number)
 * @param {number} y1 is a co-ordinate (real number)
 * @param {number} x2 is a co-ordinate (real number)
 * @param {number} y2 is a co-ordinate (real number)
 * @returns {number} returns distance between co-ordinates
 */
function calDistance(x1, y1, x2, y2){
    let distance;
    distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
    return Math.round((distance + Number.EPSILON)*100)/100;
}

