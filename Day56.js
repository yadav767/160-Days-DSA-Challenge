nums = [3, 2, 3, 2, 2, 2]



var divideArray = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) % 2 != 0) return false;
    }
    return true;


}
console.log(divideArray(nums));