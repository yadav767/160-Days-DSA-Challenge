//Leetcode Problem 1365: How Many Numbers Are Smaller Than the Current Number
let nums = [8, 1, 2, 2, 3];
var smallerNumbersThanCurrent = function (nums) {

    let result = nums.map(num => nums.filter(n => n < num).length)
    return result

};
console.log(smallerNumbersThanCurrent(nums));