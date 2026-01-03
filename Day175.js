//Leetcode Problem 1859: Sorting the Sentence
let s = "is2 sentence4 This1 a3";

var sortSentence = function (s) {
    return s
        .split(" ")
        .sort((a, b) => a[a.length - 1] - b[b.length - 1])
        .map(word => word.slice(0, -1))
        .join(" ");
};
console.log(sortSentence(s));