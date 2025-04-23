let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function transpose(A) {
    let m = A.length;
    let n = A[0].length;
    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = [];
        for (let j = 0; j < m; j++) {
            ans[i][j] = A[j][i];
        }
    }
    for (let k = 0; k < ans.length; k++) {
        for (let l = 0; l < A[0].length; l++) {
            process.stdout.write(`${ans[k][l]}`);
        }
        console.log();
    }
}


transpose(A);
