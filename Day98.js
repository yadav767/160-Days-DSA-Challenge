//1664. Ways to Make a Fair Array.

let nums = [2, 1, 6, 4];
var waysToMakeFair = function (nums) {
    let pfeven = [];
    let pfodd = [];
    if (nums.length > 0) {
        pfeven[0] = nums[0];
        pfodd[0] = 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (i % 2 == 0) {
            pfeven[i] = pfeven[i - 1] + nums[i];
            pfodd[i] = pfodd[i - 1];
        } else {
            pfodd[i] = pfodd[i - 1] + nums[i];
            pfeven[i] = pfeven[i - 1];
        }
    }
    let count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let sumeven = pfodd[n - 1] - pfodd[i];
        let sumodd = pfeven[n - 1] - pfeven[i];

        if (i != 0) {
            sumeven += pfeven[i - 1];
            sumodd += pfodd[i - 1];
        }
        if (sumeven === sumodd) {
            count++;
        }
    }
    return count;
};
console.log(waysToMakeFair(nums));