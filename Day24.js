// to find the nth fibonaci number

let n = 27;
function fibo(n) {
    if (n == 0 || n == 1) return n;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(n));
