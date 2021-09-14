"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,
                    userNames, userMapped, sortByAge, getAverageAge}; //add all of your function names here that you need for the node mocha tests


// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements
// with values higher or equal to a and lower or equal to b and return a result as an array.

/**
 * 
 * @param {Array} arr is an array of numbers
 * @param {Number} a is an integer
 * @param {Number} b is an integer
 * @returns {Array} a range of subarray 
 */
function filterRange(arr, a, b) {
    let subArr =[];
    arr.map(function(item){ if (item >= a && item <= b) subArr.push(item);});
    return subArr;
}

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes 
//from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything. 
/**
  * 
  * @param {Array} arr is an array of numbers
  * @param {Number} a is an integer
  * @param {Number} b is an integer
  * @returns {Undefined} undefined
  */
function filterRangeInPlace(arr, a, b) {
    arr.forEach(function (item, index) {
        if (item < a || item > b){
            arr.splice(index, 1);
        }
     });
}

//Create a constructor function Calculator that creates “extendable” calculator objects.
//The task consists of two parts.
//First, implement the method calculate(str) that takes a string like "1 + 2" in the 
//format “NUMBER operator NUMBER” (space-delimited) and returns the result. 
//Should understand plus + and minus -.

// Then add the method addMethod(name, func) that teaches the calculator a new operation. 
//It takes the operator name and the two-argument function func(a,b) that implements it.
//For instance, let’s add the multiplication *, division / and power **:

/**
 * @returns {Calculator} constructor function
 */
function Calculator() {
    this.methods = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b
     };
     this.calculate = function(str) {
        let strArr = str.split(" ");
        let a = Number(strArr[0]);
        let b = Number(strArr[2]);
        let operator = strArr[1];
        return this.methods[operator](a, b); 
     };
     this.addMethod = function(name, func) {
       this.methods[name] = func;
     };
}

//You have an array of user objects, each one has user.name. Write the code 
//that converts it into an array of names.
/**
 * 
 * @param {Array} arr is an array of objects
 * @returns {Array} of numbers
 */
function userNames(arr){
    let arrUsers = [];
    for(const user of arr){
      arrUsers.push(user.name);
    }
    return arrUsers;
 }

//You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, 
//where fullName is generated from name and surname.


 /**
  * 
  * @param {Array} arr of objects
  * @returns {Array} arr of objects
  */
 function userMapped(arr){
    let obj = {};
    let arrUserObjs = [];
    for(const user of arr){
       obj.id = user.id;
       obj.fullName = user.name + " " + user.surname;
       arrUserObjs.push(obj);
       obj = {};
    }
    
    return arrUserObjs;
 }

 /**
  * 
  * @param {Array} arr is array of objects
  * @returns {Array} sorted array by age
  */
function sortByAge(arr) {
    let arr1 = [];
    let arrUserObjs = [];
    for(const user of arr) {
       arr1.push(user.age);
    }
    arr1 = arr1.sort();
    for(let i = 0; i < arr1.length;i++){
       for(let j = 0; j < arr.length;j++){
          if(arr1[i] === arr[j].age){
             arrUserObjs.push(arr[j]);
          }
       }
    }
    return arrUserObjs;
 }

/**
 * 
 * @param {Array} users is array of objects
 * @returns {Number} average age
 */
function getAverageAge(users){
    let total = 0;
    let avgAge;
    for(const user of users){
       total += user.age;
    }
    return avgAge = total/users.length;
}

/**
 * 
 * @param {Array} arr is an array of strings
 * @returns {Array} an array of unique strings
 */
function unique(arr) {
    let unqStr = [];
    arr.forEach(function(item){
      if(!unqStr.includes(item)) {
         unqStr.push(item);
      }
    });
    return unqStr;
  }

/**
 * 
 * @param {Array} arr is an array of objects 
 * @returns {Array} an array of objects grouped by id
 */
function groupById(arr) {
    let usersId = {};
    for (const user of arr){
       usersId[user.id] = user;
    }
     return usersId;
 }
 

