//Leetcode-1672. Richest Customer Wealth
let accounts = [[1, 2, 3], [3, 2, 1]];
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    let n = accounts.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            sum += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, sum);
    }
    return maxWealth

};
console.log(maximumWealth(accounts));