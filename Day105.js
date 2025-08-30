//Leetcode Problem 1752: Check if Array Is Sorted and Rotated
let nums = [3, 4, 5, 1, 2]
var check = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
    }

    return count <= 1;
};
console.log(check(nums))