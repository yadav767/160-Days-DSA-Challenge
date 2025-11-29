//Leetcode Problem 2089: Find Target Indices After Sorting Array
let nums = [1, 2, 5, 2, 3], target = 2;

var targetIndices = function (nums, target) {
    let ans = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            ans.push(i)
        }
    }
    return ans
};
console.log(targetIndices(nums, target));