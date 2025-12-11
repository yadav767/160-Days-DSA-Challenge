//Leetcode-1668: Maximum Repeating Substring
let sequence = "ababc", word = "ab";

var maxRepeating = function (sequence, word) {
    let count = 0;
    let repeated = word;

    while (sequence.includes(repeated)) {
        count++;
        repeated += word;
    }

    return count;
};
console.log(maxRepeating(sequence, word));