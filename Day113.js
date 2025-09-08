//Leetcode ->70 (Climbing stairs)

var climbStairs = function (n) {
    if (n <= 2) return n;

    let first = 1;  // f(1)
    let second = 2; // f(2)

    for (let i = 3; i <= n; i++) {
        let third = first + second; // f(i) = f(i-1) + f(i-2)
        first = second;
        second = third;
    }

    return second;
};
console.log(climbStairs(12))