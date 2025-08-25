// 191. Number of 1 Bits
let n = 128;
var hammingWeight = function (n) {
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (((n >> i) & 1) == 1) {
            count++;
        }
    }
    return count
};
console.log(hammingWeight(n));
