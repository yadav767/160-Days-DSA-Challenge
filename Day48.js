nums = [4, 5, 6, 7, 0, 1, 2];
let target = 9;


var search = function (nums, target) {

    let start = 0, end = nums.length - 1, ans = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) {

            return mid;
        }
        else {
            if (nums[start] <= nums[mid]) {
                if (nums[start] <= target && nums[mid] >= target) end = mid;
                else start = mid + 1;
            }
            else {
                if (nums[mid] <= target && target <= nums[end]) start = mid;
                else end = mid - 1;
            }
        }



    }
    return -1;

}
console.log(search((nums, target)))