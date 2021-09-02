// Question 1
"use strict";

function computeSalesCommission(salary, sales) {
    if (salary === true){
        if (sales < 300){
            return "No commission";
        } else if (sales >= 300 && sales <= 500){
            return `commission = ${sales * 0.01}`;
        }else if (sales > 500){
            return `commission = ${sales * 0.02}`;
        }
    } else {
        if (sales < 300){
            return "No comission";
        }else if (sales >= 300 && sales <= 500){
            return `commission = ${sales * 0.02}`;
        }else if (sales > 500){
            return `commission = ${sales * 0.03}`;
        }
    }
}
console.log(computeSalesCommission(true, 200));