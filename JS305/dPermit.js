const prompt = require("prompt-sync")();
let age = prompt("How old are you : ");

if(age < 0){
    console.log("Please enter a valid age")
}else if(age > 0 && age <= 14){
    console.log("you can not drive")
}else if(age >= 15 && age <= 18){
    console.log("you can drive under supervision")
}else {
    console.log("you can drive")
}