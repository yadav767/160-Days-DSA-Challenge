//Leetcode Problem 2553: Separate the Digits in an Array
let nums = [13, 25, 83, 77];
var separateDigits = function (nums) {
    let result = [];
    for (let num of nums) {
        let digits = num.toString().split('').map(Number)
        result.push(...digits)
    }
    return result


};
console.log(separateDigits(nums));