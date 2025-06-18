let nums = [5, 3, 6, 1, 12];
let original = 3;

var findFinalValue = function (nums, original) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == original) original *= 2;
    }


    return original;


}
console.log(findFinalValue(nums, original))
