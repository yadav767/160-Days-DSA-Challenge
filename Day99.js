//169. Majority Element.
let nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
    let max = nums[0];
    let freq = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === max) {
            freq++;
        } else if (freq == 0) {
            max = nums[i];
        } else {
            freq--
        }
    }
    return max

};
console.log(majorityElement(nums));