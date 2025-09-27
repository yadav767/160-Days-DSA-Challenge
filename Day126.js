//Leetcode Problem 1342: Number of Steps to Reduce a Number to Zero;
let num = 14;

var numberOfSteps = function (num) {
    let step = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = Math.floor(num / 2);

        } else {
            num--;
        }
        step++;
    }
    return step


};
console.log(numberOfSteps(num));