let prompt = require(`prompt-sync`)();
let n = prompt("Enter the number :");
console.log((n & (n - 1)) == 0 ? "Power of two" : "not power of two");

