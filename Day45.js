let arr = [2, 3, 4, 5, 6, 10, 12, 14];
let target = 6;
console.log(binarySearch(arr, target));

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}