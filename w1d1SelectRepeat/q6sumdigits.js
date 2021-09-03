
// Question 6

const prompt = require("prompt-sync")();
let n = prompt("enter an integer: ");
n = parseInt(n);

let sum = 0;
if (n < 10) {
    sum = n
} else {
    while(n){
        sum = sum + n%10;
        n = Math.floor(n/10);
    }
}
console.log(sum)