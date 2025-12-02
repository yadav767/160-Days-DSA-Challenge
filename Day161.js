//LeetCode Problem 1051: Height Checker
let heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
    let sorted = [...heights].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            count++;
        }
    }

    return count;
};
console.log(heightChecker(heights));