//Leetcode Problem 1920: Build Array from Permutation
let nums = [0, 2, 1, 5, 3, 4];
var buildArray = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
    return ans

};
console.log(buildArray(nums));