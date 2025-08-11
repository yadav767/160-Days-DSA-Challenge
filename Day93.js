//485. Max Consecutive Ones.
let nums = [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0];
var findMaxConsecutiveOnes = function (nums) {
    let ans = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) { count++ }
    }
    if (count == 0) { return nums.length }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let left = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (nums[j] == 1) { left++; }
                else { break; }
            }
            let right = 0;
            for (let k = i + 1; k < nums.length; k++) {
                if (nums[k] == 1) { right++ }
                else { break; }
            }
            let total = Math.max(right, left);
            ans = Math.max(ans, total);
        }
    }
    return ans;

};
console.log(findMaxConsecutiveOnes(nums));