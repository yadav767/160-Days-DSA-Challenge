//15- 3 Sum

let nums = [-1, 0, 1, 2, -1, -4]

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        while (left < right) {

            let total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right++;
                left++;
                right--;

            }
            else if (total < 0) left++;
            else right--;
        }

    }
    return result;

}
console.log(threeSum(nums))