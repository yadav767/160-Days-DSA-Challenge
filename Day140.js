//Leetcode Problem 493: Reverse Pairs

let nums = [1, 3, 2, 3, 1];
var merge = function (arr, low, mid, high) {
    const temp = [];
    let left = low, right = mid + 1;

    // Merge both halves
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right])
            temp.push(arr[left++]);
        else
            temp.push(arr[right++]);
    }

    // Add remaining left elements
    while (left <= mid)
        temp.push(arr[left++]);

    // Add remaining right elements
    while (right <= high)
        temp.push(arr[right++]);

    // Copy temp back to original array
    for (let i = low; i <= high; i++)
        arr[i] = temp[i - low];

}

// Recursive merge sort
var mergeSort = function (arr, low, high) {
    if (low >= high) return 0;

    const mid = Math.floor((low + high) / 2);
    let cnt = 0;

    cnt += mergeSort(arr, low, mid);
    cnt += mergeSort(arr, mid + 1, high);
    cnt += countPairs(arr, low, mid, high)
    merge(arr, low, mid, high);
    return cnt
}
var countPairs = function (arr, low, mid, high) {
    let right = mid + 1;
    let count = 0
    for (let i = low; i <= mid; i++) {
        while (right <= high && arr[i] > 2 * arr[right]) {
            right++;
        }
        count += (right - (mid + 1));
    }
    return count;
}


var reversePairs = function (nums) {
    let n = nums.length
    return mergeSort(nums, 0, n - 1)

};
console.log(reversePairs(nums));