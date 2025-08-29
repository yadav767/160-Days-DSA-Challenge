//Leetcode Problem 2220: Minimum Bit Flips to Convert Number
let start = 10, goal = 7
var minBitFlips = function (start, goal) {

    let ans = start ^ goal;
    let count = 0;
    while (ans) {
        if (ans % 2 != 0) {
            count++
        }
        ans = Math.floor(ans / 2)
    }
    return count
};
console.log(minBitFlips(start, goal))