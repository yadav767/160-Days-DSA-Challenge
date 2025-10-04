//Leetcode 263. Ugly Number
let
var isUgly = function (n) {
    if (n <= 0) return false
    let devide = [2, 3, 5];

    for (let p of devide) {
        while (n % p === 0) {
            n = Math.floor(n / p)
        }
    }
    return n === 1

};
console.log(isUgly(6))