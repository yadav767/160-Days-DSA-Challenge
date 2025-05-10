function isPerfectSquare(num) {
    if (num < 0) return false; // negative number perfect square nahi ho sakta
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

// Example usage:
console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(20));  // false
