// 1480. Running Sum of 1d Array
let nums = [1, 2, 3, 4];
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;

};
console.log(runningSum(nums));