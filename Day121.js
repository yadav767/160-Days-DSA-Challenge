//Leetcode Problem 1423: Maximum Points You Can Obtain from Cards
let cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3;
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    let leftSum = 0, rightSum = 0;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        leftSum += cardPoints[i];
    }
    maxSum = leftSum;
    rightIndex = n - 1
    for (let i = k - 1; i >= 0; i--) {
        leftSum -= cardPoints[i];
        rightSum += cardPoints[rightIndex];
        rightIndex = rightIndex - 1;
        maxSum = Math.max(maxSum, leftSum + rightSum)
    }
    return maxSum
};
console.log(maxScore(cardPoints, k));