// You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.
let A = [[1, 2, 3], [4, 3, 5], [5, 6, 7]];
function colSum(A) {
    let ans = new Array();
    for (let i = 0; i < A.length; i++) {
        let sum = 0
        for (let j = 0; j < A[0].length; j++) {
            sum += A[j][i];
        }
        ans.push(sum);
    }
    return ans
}
console.log(colSum(A));

