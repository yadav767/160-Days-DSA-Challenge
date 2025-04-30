//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
let nums = [2, 4, 5, 6, 9];
let target = 10;
function twoSum(nums, target) {
    let map = new Map();
    let ans = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {//it was like x+y=target=>x=target-y
            ans[0] = i;
            ans[1] = map.get(target - nums[i]);
            return ans;
        }
        else {
            map.set(nums[i], i)
        }
    }
}
console.log(twoSum(nums, target));


