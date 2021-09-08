"use strict";


const calculator = { // implement this

    setValues: function (operand1, operand2){
        let arr = [operand1, operand2];
        this.a = arr[0];
        this.b = arr[1];
        return arr;
    },

    sum:  function(){
        return this.a + this.b;
       },
    mul:  function(){
        return this.a * this.b;
       }
 };





/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
// module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests