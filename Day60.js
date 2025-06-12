let nums = [1, 2, 3, 4, 5, 2];
var findDuplicate = function (nums) {
    let ans = [...nums];
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i];
        if (ans[index] < 0) {
            return nums[i];
        }
        ans[index] = -ans[index];
    }

}
console.log(findDuplicate(nums));