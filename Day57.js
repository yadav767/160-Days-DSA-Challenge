let nums = [1, 3, 2, 1, 3, 2, 2]

var numberOfPairs = function (nums) {
    let totalNumber = 0;
    let count = 0;
    let map = new Map();
    let ans = [0, 0];
    let visited = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (visited.has(nums[i])) continue;
        else {
            visited.add(nums[i]);
            count += Math.floor(map.get(nums[i]) / 2)
            totalNumber += map.get(nums[i]) % 2;

        }
    }
    ans[0] = count;
    ans[1] = totalNumber;
    return ans;
}

console.log(numberOfPairs(nums));
