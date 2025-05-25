

function firstAndLast(nums, target) {

    let start = findElem(nums, target, true);
    let end = findElem(nums, target, false);
    return [start, end];
}



let findElem = function (nums, target, isTrue) {
    let first = 0;
    let last = nums.length - 1;
    let ans = -1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] == target) {
            if (isTrue) {
                ans = mid;
                last = mid - 1;
            }
            else {
                ans = mid;
                first = mid + 1;
            }
        }
        else if (nums[mid] > target) last = mid - 1;
        else first = mid + 1;
    }
    return ans;
}

let ans = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(firstAndLast(ans, target));
