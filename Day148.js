//Leetode Problem 2119: A Number After a Double Reversal
let num = 1800;
var isSameAfterReversals = function (num) {// 0 is special — always true
    if (num === 0) return true;

    // if last digit is 0 → false
    return num % 10 !== 0;


};
console.log(isSameAfterReversals(num));