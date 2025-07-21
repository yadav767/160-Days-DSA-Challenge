//14. Longest Common Prefix.
const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let firstWord = strs[0];
    let prefix = "";
    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};

console.log(longestCommonPrefix(strs))