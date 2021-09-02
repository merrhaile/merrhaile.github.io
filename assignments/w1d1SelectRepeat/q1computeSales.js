// Question 1

const prompt = require("prompt-sync")();
let salary = prompt("Do you get salary (yes/no): ");
let sales = prompt("enter sales: ");
salary = parseInt(salary);
sales = parseInt(sales);

if(salary === "yes"){
    if (sales < 300){
        console.log("No commission")
    } else if (sales > 300 && sales < 500){
        console.log(`commission = ${sales * 0.01}`)
    }else if (sales > 500){
        console.log(`commission = ${sales * 0.02}`)
    }
} else {
    if (sales < 300){
        console.log("enter valid number")
    }else if (sales > 300 && sales < 500){
        console.log(`commission = ${sales * 0.02}`)
    }else if (sales > 500){
        console.log(`commission = ${sales * 0.03}`)
    }
}

