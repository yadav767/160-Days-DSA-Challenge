//Leetcode Problem 1394: Find Lucky Integer in an Array
let arr = [2, 2, 3, 4]
var findLucky = function (arr) {

    arr.sort((a, b) => b - a);

    let count = 1;
    let ans = -1
    for (let i = 1; i <= arr.length; i++) {
        if (i < arr.length && arr[i] === arr[i - 1]) {
            count++;
        } else {
            if (count === arr[i - 1]) {
                ans = Math.max(ans, arr[i - 1]);
            }
            count = 1;
        }
    }
    return ans
};
console.log(findLucky(arr))