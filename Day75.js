

let n = 27;
var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    else {
        while (n) {
            if (n == 1) return true;
            n = n / 3;

        }
        return false;

    }

}
console.log(isPowerOfThree(n));