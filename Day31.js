let n = 12345;
function reverseDigit(n, rev) {
    if (n === 0) return rev;
    return reverseDigit((Math.floor(n / 10)), rev * 10 + (n % 10));
}
console.log(reverseDigit(n, 0));