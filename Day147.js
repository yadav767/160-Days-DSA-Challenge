//Leetcode Problem 1281: Subtract the Product and Sum of Digits of an Integer
let n = 234;
var subtractProductAndSum = function (n) {
    let pro = 1;
    let sum = 0;
    while (n) {
        let rem = n % 10;
        pro *= rem;
        sum += rem
        n = Math.floor(n / 10)
    }
    return pro - sum

};
console.log(subtractProductAndSum(n));