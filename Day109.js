//Leetcode Problem 73: Set Matrix Zeroes
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
var setZeroes = function (matrix) {
    let row = new Array(matrix.length).fill(0);
    let col = new Array(matrix[0].length).fill(0);
    let n = matrix.length
    let m = matrix[0].length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }
};
console.log(setZeroes(matrix));