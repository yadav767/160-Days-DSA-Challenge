//Leetcode - Problem: 2315. Count Asterisks
let s = "l|*e*et|c**o|*de|";

var countAsterisks = function (s) {
    let inside = false;
    let count = 0;

    for (let ch of s) {
        if (ch === '|') inside = !inside;
        else if (ch === '*' && !inside) count++;
    }

    return count;
};
console.log(countAsterisks(s));