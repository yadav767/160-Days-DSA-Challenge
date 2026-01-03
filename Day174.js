//Leetcode Problem 1287: Element Appearing More Than 25% In Sorted Array
let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

var findSpecialInteger = function (arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === arr[i + Math.floor(n / 4)]) {
            return arr[i];
        }
    }
};
console.log(findSpecialInteger(arr));