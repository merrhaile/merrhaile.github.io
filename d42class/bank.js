"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 

/**
 * Next create a Bank class, a Bank object should have an array of Account objects, and have
 * addAccount(), addSavingsAccount(interest), addCheckingAccount(overdraft) methods each 
 * of which returns the number of the created account. Also add a closeAccount(number) 
 * method that closes (removes from the array) the account with that number, and a 
 * accountReport() method that returns a String with each account on its own line. 
 * Use a static nextNumber variable on the Bank class to know what the number for the 
 * next account will be. Test with bankTests.js.
 */


class Bank {
    _accounts = [];
    static nextNumber = new Account();
    constructor () {}
    addAccount(){
        this._accounts.push(this.nextNumber)
    }

    addSavingsAccount(interest){
        this._accounts.push(nextNumber)
    }

    addCheckingAccount(overdraft){
        this._accounts.push(nextNumber) 
    }

    closeAccount(number){
        for(const element of this._arrBank){
            if(element.getNumber() === number){
                _arrBank.pop(element);
            }
        }
    }

    accountReport(){

    return ` "Account " + ${this._number} + ": balance " + ${this._balance} \n
      "savingsaccount " + ${this._number} + ": balance " + ${this._balance}\n
      "Checkingaccount " + ${this._number} + ": balance " + ${this._balance}`
    }
}

const bank = new Bank();
console.log(bank.constructor, Bank);
console.log(bank._accounts.length, 0);
bank.addAccount();
console.log(bank._accounts);
// console.log(bank._accounts[0].getBalance(), 0);






/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;