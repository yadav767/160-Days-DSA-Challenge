//Leetcode Problem 2255: Find Smallest Common Element in Two Arrays
let nums1 = [4, 1, 3];
let nums2 = [5, 7, 2];
var minNumber = function (nums1, nums2) {
    for (let i = 1; i <= 9; i++) {
        if (nums1.includes(i) && nums2.includes(i)) {
            return i
        }
    }
    let a = Math.min(...nums1)
    let b = Math.min(...nums2)

    return Math.min(a * 10 + b, b * 10 + a)
};
console.log(minNumber(nums1, nums2));