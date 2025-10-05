//Leetocde 204. Count Primes
let n = 30;
var countPrimes = function (n) {
    let primes = new Array(n + 1).fill(1);
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i] === 1) {
            for (let j = i * i; j <= n; j = j + i) {
                primes[j] = 0;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (primes[i] == 1) {
            count++
        }
    }
    return count

};
console.log(countPrimes(n))