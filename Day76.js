
let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;

var maxSlidingWindow = function (nums, k) {
    if (nums.length === 1 && k === 1) return [nums[0]]
    let dequeue = [];
    let ans = [];
    for (let i = 0; i <= k - 1; i++) {
        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
            dequeue.pop();
        }
        dequeue.push(i);

    }
    ans.push(nums[dequeue[0]]);
    for (let i = k; i < nums.length; i++) {
        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= nums[i]) {
            dequeue.pop();
        }
        dequeue.push(i);
        if (dequeue[0] == i - k) dequeue.shift();
        ans.push(nums[dequeue[0]]);
    }

    return ans;


}

console.log(maxSlidingWindow(nums, k))