let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let B = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(isMatricesAreSame(A, B));

function isMatricesAreSame(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] != B[i][j]) {
                return "Not same";
            }

        }
    }
    return "Same";

}