//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.




let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let ans = [];
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i]) && !ans.includes(nums2[i])) {
            ans.push(nums2[i]);
        }
    }
    return ans;

}

console.log(intersection(nums1, nums2))