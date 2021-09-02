"use strict";
module.exports = {isVowel };


/**
 * 
 * @param {character} char is an english letter
 * @returns {boolean} true if the character is vowel else false
 */
function isVowel(char){
    let arr = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < arr.length; i++){
        if (char === arr[i]) {
            return true;
        }
    }
    return false;
}
console.log(isVowel("e"));