"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
  let arr = Object.entries(salaries);
  let maxSalary = 0;
  let topSalName = null;
  for(const person of arr){
    let [name, salary = null] = person;
    if(salary > maxSalary) {
        maxSalary = salary;
        topSalName = name;
    }
  }
   return topSalName;
}

