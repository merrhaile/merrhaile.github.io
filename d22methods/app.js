"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} initialValue is a number
 * @param {number} increment is a number
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
//implement this
  
  this.currentValue = initialValue;
  this.increment = increment;
  this.accumulate = function () {
      return this.currentValue += this.increment;
  };
  this.report = function () {
      return this.currentValue;
  };

}

/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
    //implement this
    this.setValues = function (operand1, operand2){
      this.a = operand1;
      this.b = operand2;
   };
   this.sum =  function(){
      return this.a + this.b;
   };
   this.mul = function(){
      return this.a * this.b;
   };
}
