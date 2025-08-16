//1823. Find the Winner of the Circular Game.

let n = 10, k = 2;
var solve = function (n, k) {
    if (n === 0) {
        return 0;
    }
    return (solve(n - 1, k) + k) % n;
}
var findTheWinner = function (n, k) {
    let ans = solve(n, k);
    return ans + 1
};
console.log(findTheWinner(n, k));