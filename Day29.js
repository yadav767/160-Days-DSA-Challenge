function gcd(a, b) {
    if (b == 0) return 0;
    return gcd(b, a % b);
}
console.log(gcd(12, 24));