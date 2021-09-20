"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
// /* eslint-disable */

/**
 * 
 * @param {Function} aOk is a function
 * @param {Function} fail  is a function
 * @param {String} password is a string
 * @returns {Function} execute either of the functions after testing the condition
 */
function askPassword(aOk, fail, password) {
    if (password === "rockstar") return aOk();
    else  return fail();
}

let user = {
    name: "John",
    loginOk() {
        return `${this.name} logged in`;
    },
    loginFail() {
        return `${this.name} failed to log in`;
    },
};


/**
 * 
 * @param {Function} aOk is a function
 * @param {Function} fail  is a function
 * @param {String} password is a string
 * @returns {Function} execute either of the functions after testing the condition
 */
function askPassword2(aOk, fail, password) {
    if (password === "rockstar") return aOk();
    else return fail();
}
  
let user2 = {
    name: "John",
    login(result) {
      return this.name + " " + (result ? "logged in" : "failed to log in");
    }
};
  
/**
 * 
 * @param {String} password is a string
 * @returns {Function} execute either of the functions after testing the condition
 */
function askPassword3(password) {
    if (password === "rockstar") return this.loginOk();
    else return this.loginFail();
}


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList() {
    this.students.forEach((student) =>
    console.log(this.title + ": " + student)); 
    }
}; 
group.showList();

let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"], 
    showList() {
    this.students.forEach(function(student) { 
        console.log(this.title + ": "  + student);
    }.bind(this)); 
}
}; 

group1.showList();





module.exports = { askPassword, askPassword2, askPassword3, user, user2 }; 