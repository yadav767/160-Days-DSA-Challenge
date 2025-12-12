//Leetcode Problem: 1528. Shuffle String
let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

var restoreString = function (s, indices) {
    let result = Array(s.length);

    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join("");
};
console.log(restoreString(s, indices));