//Leetcode 48 ->rotate image
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        let p1 = 0; p2 = n - 1;
        while (p1 < p2) {
            let temp = matrix[i][p1];
            matrix[i][p1] = matrix[i][p2];
            matrix[i][p2] = temp;
            p1++;
            p2--;
        }
    }
    return matrix

};
console.log(rotate(matrix))