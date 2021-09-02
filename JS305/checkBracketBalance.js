"use strict";
const exp1 = [ "{", "}", "{", "{", "}", "}" ] ; 
//Output: Balanced 
 
const exp2 = [ "{", "{", "}", "{" ];
const exp3 = [ "{", "[", "{", "(", ")", "}", "]", "}"];
//Output: Not Balanced

/**
 * 
 * @param {Array} exp is array of brackets --{ or }
 * @returns {boolean} true if balanced else false
 */
function checkBalance(exp){
    const stack = [];
    for (let bracket of exp){
        //if left then push
        if (bracket === "{") {
            stack.push(bracket);
        } else if (bracket === "(") {
            stack.push(bracket);
        }else if (bracket === "["){ 
            stack.push(bracket);
        } else { //have a }
            //if right then pop and check value is left
            const popBracket = stack.pop();
            if (popBracket === "{" || popBracket === "(" || popBracket === "[") {
                continue;
            } else {
                return false;
            }
        } 
    }
    //done with the array, check for stack empty
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("expect true: ", checkBalance(exp1));
console.log("expect false: ", checkBalance(exp2));
console.log("expect true: ", checkBalance(exp3));