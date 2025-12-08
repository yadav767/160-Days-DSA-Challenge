//Leetcode Problem 1662: Check If Two String Arrays are Equivalent
let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("");
};
console.log(arrayStringsAreEqual(word1, word2));