//229 -Majority Element II

let nums = [3, 2, 3];
var majorityElement = function (nums) {
    let ans = [];
    let maj_1 = Number.MIN_SAFE_INTEGER, maj_2 = Number.MIN_SAFE_INTEGER;
    let count_1 = 0, count_2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maj_1 == nums[i]) {
            count_1++;
        } else if (maj_2 == nums[i]) {
            count_2++;
        } else if (count_1 == 0 && nums[i] != maj_2) {
            maj_1 = nums[i];
            count_1 = 1;
        } else if (count_2 == 0 && nums[i] != maj_1) {
            maj_2 = nums[i];
            count_2 = 1;
        } else {
            count_1--;
            count_2--;
        }
    }
    let cnt_1 = 0, cnt_2 = 0;  // count maj_1 and maj_2
    for (let i = 0; i < nums.length; i++) {
        if (maj_1 === nums[i]) { cnt_1++; }
        if (maj_2 === nums[i]) { cnt_2++ }
    }
    let mini = Math.floor(nums.length / 3);
    if (cnt_1 > mini) { ans.push(maj_1) }
    if (cnt_2 > mini) { ans.push(maj_2) }
    return ans;

};
console.log(majorityElement(nums));