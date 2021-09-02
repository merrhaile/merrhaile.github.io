
// Question 2

const prompt = require("prompt-sync")();
let age = prompt("how old are you: ");;
age = parseInt(age);

while(age <= 18){
    age = prompt("how old are you: ");
}
console.log(age);

do
    age = prompt("how old are you: ");
while(age <= 18){
    age = prompt("how old are you: ");
}
console.log(age);