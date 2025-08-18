let nums = [2, 3, 1, -1, 0, 8, 5, 4];
let s = 3, e = 6;
let type = 1;

function sumRnge(nums, s, e, type) {
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
    let sum = 0
    if (type == 1) {
        sum = pfeven[e];
        if (s != 0) {
            sum -= pfeven[s - 1];
        }
    } else {
        sum = pfodd[e];
        if (s != 0) {
            sum -= pfodd[s - 1];
        }
    }
    return sum
}
console.log(sumRnge(nums, s, e, type));