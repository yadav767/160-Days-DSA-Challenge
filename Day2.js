let A = [[1, 2, 3], [4, 5, 6], [6, 7, 8]];
function rowSum(A) {
    let n = A.length;
    let ans = new Array();

    let m = A[0].length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += A[i][j];

        }
        ans.push(sum);
    }
    return ans;


}
console.log(rowSum(A));