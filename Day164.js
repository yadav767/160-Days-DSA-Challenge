//Leetcode Problem 1523: Count Odd Numbers in an Interval Range
let low = 3;
let high = 7;

var countOdds = function (low, high) {
    let count = Math.floor((high - low) / 2);
    if (low % 2 !== 0 || high % 2 !== 0) count++;
    return count;
};
console.log(countOdds(low, high));