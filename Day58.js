let nums = [1, 2, 2, 4, 4, 5, 5];



var singleNumber = function (nums) {

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
}
console.log(singleNumber(nums))