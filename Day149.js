//Leetcode Problem 1221: Split a String in Balanced Strings
let s = "RLRRLLRLRL";
var balancedStringSplit = function (s) {
    let balance = 0;
    let count = 0;

    for (let ch of s) {
        if (ch === 'R') balance++;
        else balance--;

        if (balance === 0) count++;
    }

    return count;
};
console.log(balancedStringSplit(s));