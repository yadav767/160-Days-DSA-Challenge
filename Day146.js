//Leetocde Problem: 2114. Maximum Number of Words Found in Sentences
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
var mostWordsFound = function (sentences) {
    let maxWords = 0;
    for (let sentence of sentences) {
        let count = sentence.split(" ").length;
        maxWords = Math.max(maxWords, count);
    }
    return maxWords;
};
console.log(mostWordsFound(sentences));