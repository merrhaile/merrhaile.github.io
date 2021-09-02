"use strict";
const assert = require("assert");
/* import from functions.js module */
const functionsModule = require("./myCode.js"); 
const checkPrime = functionsModule.checkPrime; 


describe("checkPrime returns true if argument is prime ", function () { 
    it("37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    }); 
});