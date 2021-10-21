"use strict";
/* global Account  */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */
/**
 * Create a CheckingAccount class by extending Account. In addition to the attributes of 
 * an Account, it should have an overdraft limit variable. The overdraft amount indicates
 *  how much a person is allowed to temporarily withdraw beyond what they have. In other 
 * words, it’s the amount that an account is allowed to go into the red (negative balance). 
 * Be sure to set this value in the constructor and create a getter and a setter for it. 
 * Also make sure that you override the withdraw(amount) method and the toString() method. 
 * Test with bankTests.js.
 */

class CheckingAccount extends Account {

    constructor(number, overdraft) {
        super(number);
        this.overdraft = overdraft;
    }

    setOverdraft(overdraft) {
        this.overdraft = overdraft;
    }
    getOverdraft() {
        return this.overdraft;
    }

    withdraw(amount) {
       if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
       if (amount > this.overdraft || this.balance < -(this.overdraft)) {
            throw Error("Insufficient funds");
       }
            this._balance -= amount;
    }

    toString() {
        return "Checkingaccount " + this._number + ": balance " + this._balance;
    }
}


// const checking = new CheckingAccount(1, 200);
// console.log(checking.getNumber(), 1);
// console.log(checking.getOverdraft(), 200);

// console.log(checking.getBalance());
// checking.setOverdraft(250);
// checking.withdraw(200);
// checking.withdraw(150);
// console.log(checking.getBalance(), -200);













/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.CheckingAccount = CheckingAccount;