//Leetcode Problem 2441: Largest Positive Integer That Exists With Its Negative
let nums = [-1, 2, -3, 3];

var findMaxK = function (nums) {
    let set = new Set(nums);
    let answer = -1;
    for (let num of nums) {
        if (num > 0 && set.has(-num)) {
            answer = Math.max(num, answer)
        }
    }
    return answer
};
console.log(findMaxK(nums));