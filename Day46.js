let arr = [2, 3, 5, 6, 7, 8, 9, 12, 13, 14];
let target = 4;
console.log(searchInsertPosition(arr, target));



function searchInsertPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;

    }
    return start;
}