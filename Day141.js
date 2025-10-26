//Leetcode Problem 1470: Shuffle the Array
let nums = [2, 5, 1, 3, 4, 7], n = 3
var shuffle = function (nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    return result;
};
console.log(shuffle(nums, n));