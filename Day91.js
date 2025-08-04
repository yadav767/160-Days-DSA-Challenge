
let x = 2.0000;
let n = -4;
var myPow = function (x, n) {
    if (n === 0) { return 1; }
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    let p = myPow(x, Math.floor(n / 2));
    if (n % 2 == 0) {
        return p * p;
    }
    else {
        return p * p * x;
    }
};
console.log(myPow(x, n))