//Leetcode Problem: 2427. Number of Common Factors
let a = 12, b = 6;
var commonFactors = function (a, b) {
    let count = 0;
    let limit = Math.min(a, b);
    for (let i = 1; i <= limit; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count
};
console.log(commonFactors(a, b));