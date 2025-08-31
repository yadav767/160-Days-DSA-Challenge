//Leetcode Problem 2149: Rearrange Array Elements by Sign
let nums = [3, 1, -2, -5, 2, -4]

var rearrangeArray = function (nums) {
    let n = Math.floor(nums.length / 2);
    let ans = Array(nums.length);
    let posIndex = 0, negIndex = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            ans[posIndex] = nums[i];
            posIndex += 2;
        } else {
            ans[negIndex] = nums[i];
            negIndex += 2;
        }
    }
    return ans

};
console.log(rearrangeArray(nums))