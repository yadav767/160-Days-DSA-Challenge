let n = 23298432458;
function SOD(n) {
    if (n < 10) return n;
    return SOD(Math.floor(n / 10)) + n % 10;
}
console.log(SOD(n));