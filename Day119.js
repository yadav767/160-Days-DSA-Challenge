//Leetcode 55. Jump Game
let nums = [2, 3, 1, 1, 4]
var canJump = function (nums) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) return false;
        maxIndex = Math.max(maxIndex, i + nums[i])
    }
    return true;
};