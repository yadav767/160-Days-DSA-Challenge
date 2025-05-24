let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(missingNumber(arr))


function missingNumber(nums) {
    let i = 0;
    while (i < nums.length) {
        let correctIdx = nums[i];
        if (nums[i] != nums[correctIdx]) {
            let temp = nums[i];
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;
        }
        else i++;
    }
    for (let j = 0; j < nums.length; j++) {
        if (j != nums[j]) {
            return j
        }
    }
    return nums.length;
}