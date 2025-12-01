//Leetcode Problem 219: Contains Duplicate II
let nums = [1, 2, 3, 1], k = 3;

var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let num = 0; num < nums.length; num++) {
        if (map.has(nums[num]) && num - map.get(nums[num]) <= k) {
            return true;
        }
        map.set(nums[num], num);
    }
    return false
};
console.log(containsNearbyDuplicate(nums, k));