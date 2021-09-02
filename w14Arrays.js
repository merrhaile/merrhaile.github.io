"use strict";

function maxOfThree(num1, num2, num3) {
    let temp = -Infinity;
    if(num1 > num2 || num2 > num3){
        temp = num1;
    }else if(num2 > temp){
        temp = num2;
    } else if(num3 > temp) {
        temp = num3;
    }
return temp;
}
console.log(maxOfThree(1, 3, 6));