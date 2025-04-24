let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let B = 2
function sclarProduct(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            A[i][j] *= B;
        }
    }
}
sclarProduct(A, B);
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
        process.stdout.write(`${A[i][j]}`);
    }
    console.log();
}