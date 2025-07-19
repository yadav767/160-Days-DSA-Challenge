

var alternateDigitSum = function (n) {
    let digit = [];
    while (n != 0) {
        digit.push(n % 10);
        n = Math.floor(n / 10);
    }
    digit.reverse();

    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        if (i % 2 == 0) sum += digit[i]
        else sum -= digit[i];
    }
    return sum;
};
console.log(alternateDigitSum(34567))