//Leetcode Problem 2535: Difference Between Element Sum and Digit Sum of an Array
let nums = [1, 15, 6, 3];

var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let num of nums) {
        elementSum += num;

        for (let d of num.toString()) {
            digitSum += Number(d);
        }
    }

    return elementSum - digitSum;
};
console.log(differenceOfSum(nums));