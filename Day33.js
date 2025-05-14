function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Example usage:
console.log(isPerfectSquare(25));  // true
console.log(isPerfectSquare(20));  // false
