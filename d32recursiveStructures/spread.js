"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {copyArray, concat, findMin, combineObjs, findSubtree }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr is an array
 * @returns {Array} copies an array
 */
function copyArray(arr){
    return [...arr];
}

/**
 * 
 * @param {Array} arr1 is an array
 * @param {Array} arr2 is an array
 * @returns {Array} merges the two arrays
 */
function concat(arr1, arr2){
    let newArr;
    return newArr = [...arr1, ...arr2];
}

/**
 * 
 * @param  {Array} numbers is an array of numbers
 * @returns {Number} the minmum number
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}

/**
 * 
 * @param {Object} obj1 is an object
 * @param {Object} obj2 is an object
 * @returns {Object} a combined object of the two
 */
function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};
}


/**
 * 
 * @param {Object} tree is an object
 * @returns {undefined} it logs names in the tree
 */
 function logSimpsNames(tree){
    console.log(tree.value);
    if (tree.descendents !== null){
        for(const subtree of  Object.values(tree.descendents)){
            logSimpsNames(subtree);
        }
    }
}

/**
 * 
 * @param {Object} tree is an object
 * @param {String} target is a string
 * @returns {Boolean} it returns true if target name equals the tree.value
 */
function checkTargetName(tree, target){
    if(tree.value === target) {
        return true;
     } 
    else if (tree.descendents !== null){
        for(const subtree of  Object.values(tree.descendents)){
           if(checkTargetName(subtree, target)) return true;
        }
    }
    return false;
}

/**
 * 
 * @param {Object} tree is an object
 * @param {String} target is a name
 * @returns {object} subtree when target equals to tree.value
 */
function findSubtree(tree, target){
    if(tree.value === target) {
        return tree;
     } 
    else if (tree.descendents !== null){
        for(const subtree of  Object.values(tree.descendents)){
           if(findSubtree(subtree, target)) return subtree;
           else return null;
        }
    }
    return null;
}
/**
 * 
 * @param {String} value is a string
 * @returns {Cunstructor} is constructor function for a linked list
 */
function ListNode(value){
    this.value = value;
    this.next = null;
}

/**
 * 
 * @param {Object} list is linkedlist
 * @param {String} target is a string to be compared with list.value
 * @returns {Object} the list that contains the target
 */
function findListNode(list, target){
    if (list.value !== target) {
        list = list.next;
        list = findListNode(list, target)
     }
     return list;
 }

 /**
  * 
  * @param {Object} tree is an object
  * @param {Function} modifierFunc is a callback function
  * @returns {String} modified value of the tree
  */
function treeModifier(tree, modifierFunc){
    if(tree !== null){
        return modifierFunc(tree.value);
    }else {
        for(const subtree of  Object.values(tree.descendents)){
            treeModifier(subtree, modifierFunc);
        }
    }
}

/**
 * 
 * @param {String} str is a string
 * @returns {String} the string in upper case
 */
function allCaps(str){
    return str.toUpperCase();
}

/**
 * 
 * @param {String} str is a string
 * @returns {String} adds stars to the fornt of the string
 */
function addStars(str){
    return "***" + str;
}

/**
 * 
 * @param {String} str is a string
 * @returns {String} reverses the the given string
 */
function reverseNode(str){
    let str1 = "";
    for(let i = str.length - 1; i >=0; i--){
        str1 += str[i];
    }
    return str1;
}

/**
 * 
 * @param {Object} tree is an object
 * @returns {Array} an array of tree value
 */
function treeCollector(tree){
    NODE_VALUES.push(tree.value);
    if (tree.descendents !== null) {
        for(const subtree of  Object.values(tree.descendents)){
            treeCollector(subtree);
        }
    }
    return NODE_VALUES;
}
const NODE_VALUES = [];


//Write code to illustrate the use of the rest operator
function getfullName(make, model, ...detials){
    console.log(make + " " + model );
    console.log(detials);
}
console.log(getfullName("Toyota", "Corrola", "Hybird", "Red", 2019));

const arr = [1, 4, 5, 8, 2, 10];
console.log(Math.max(...arr));