//Leetcode Problem 67: Add Binary
let a = "11", b = "1"
var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;

};
console.log(addBinary(a, b));