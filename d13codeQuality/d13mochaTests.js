"use strict";

const assert = require("assert");
/* import from q1computeSales.js module */
const functionsModule = require("./functionsForTest.js"); 
const computeSalesCommission = functionsModule.computeSalesCommission; 
const compoundInterest = functionsModule.compoundInterest; 
const calDownpayment = functionsModule.calDownpayment; 
const sumDigits = functionsModule.sumDigits; 
const multDigits = functionsModule.multDigits; 
const convertFahrenheit = functionsModule.convertFahrenheit; 
const calDistance = functionsModule.calDistance; 

describe("test of ComputSalesCommission", function(){ 
    it("tests salaried and 200 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 200), 0); 
    });
    it("tests not salaried and 200 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 300), 3); 
    });
    it("tests not salaried and 300 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
        assert.strictEqual(computeSalesCommission(true, 3500), 65); 
    });
    it("tests not salaried and 3500 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 3500), 100);   
    }); 
});
//*********************************************************************/

describe("returns compoundInterest", function(){ 
    it("returns compoundInterest ", function(){
        assert.strictEqual(compoundInterest(100, 10, 1), 110.47); 
    });
    it("teturns compoundInterest", function(){ 
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09);
    });
});
//*********************************************************************/

describe("returns downpayment", function(){ 
    it("returns downpayment ", function(){
        assert.strictEqual(calDownpayment(40000), 2000); 
    });
    it("teturns downpayment", function(){ 
        assert.strictEqual(calDownpayment(50000), 2500);
    });
    it("returns downpayment ", function(){
        assert.strictEqual(calDownpayment(100000), 7500); 
    });
    it("returns downpayment", function(){ 
        assert.strictEqual(calDownpayment(200000), 22500);
    });
});
//*********************************************************************/

describe("returns the sum of the digits", function () { 
    it("returns 10", function () {
        assert.strictEqual(sumDigits(1234), 10);
    });
    it("returns 3", function () {
        assert.strictEqual(sumDigits(102), 3);
    }); 
    it("returns 8", function () {
        assert.strictEqual(sumDigits(8), 8);
    }); 
});
//*********************************************************************/

describe("returns product of the digits ", function () { 
    it("returns 24", function () {
        assert.strictEqual(multDigits(1234), 24);
    });
    it("returns 0", function () {
        assert.strictEqual(multDigits(102), 0);
    }); 
    it("returns 8", function () {
        assert.strictEqual(multDigits(8), 8);
    }); 
});
//*********************************************************************/

describe("returns temprature in Fahrenheit ", function () { 
    it("returns 0", function () {
        assert.strictEqual(convertFahrenheit (32), 0);
    });
    it("returns -17.7778", function () {
        assert.strictEqual(convertFahrenheit (0), -17.7778);
    }); 
    it("returns 100", function () {
        assert.strictEqual(convertFahrenheit (212), 100);
    }); 
    it("returns 37.7778", function () {
        assert.strictEqual(convertFahrenheit (100), 37.7778);
    }); 
});
//*********************************************************************/

describe("returns temprature in Fahrenheit ", function () { 
    it("returns 7.07", function () {
        assert.strictEqual(calDistance(0, 0, 5, 5), 7.07);
    });
}); 