//Leetcode 1283. Find the Smallest Divisor Given a Threshold
let nums = [1, 2, 5, 9], threshold = 6
var devideSum = function (arr, div) {
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / div);
    }
    return sum;

}
var smallestDivisor = function (nums, threshold) {
    let low = 0;
    let high = Math.max(...nums);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (devideSum(nums, mid) <= threshold) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low

};
console.log(smallestDivisor(nums, threshold));