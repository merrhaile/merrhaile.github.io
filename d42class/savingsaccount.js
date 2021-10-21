"use strict";
/* global Account require  */
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * Extend the Account class by creating a class called SavingsAccount in a file called
 *  savingsaccount.js. In addition to the attributes of Account, SavingsAccount should
 *  have an interest variable, which is set in the constructor and has a getter and a 
 * setter mehtod. It should also have an addInterest() method which deposits the 
 * interest amount into the account. The calculation for the amount is balance * interest / 100 . 
 * Be sure to also overwrite the toString() method, and test with the Mocha tests in 
 * bankTests.js for the methods in SavingsAccount.

 */

class SavingsAccount extends Account {
    
    constructor (number, interest) {
        super(number);
        this.interest = interest;
    }

    setInterest (interest) {
        this.interest = interest;
    }
    getInterest () {
        return this.interest;
    }

    addInterest() {
       super.deposit(this._balance * (this.interest/100));
    }

    toString() {
        return "savingsaccount " + this._number + ": balance " + this._balance;
    }
}


// let savings = new SavingsAccount(1, 5);
// console.log(savings.getNumber(), 1);
// console.log(savings.getInterest(), 5);
// savings.setInterest(6);
// console.log(savings.getInterest(), 6);

// savings.setInterest(5);
// savings.deposit(100);
// savings.addInterest();
// console.log(savings.getBalance(), 105);




/* global exports */
exports.SavingsAccount = SavingsAccount;