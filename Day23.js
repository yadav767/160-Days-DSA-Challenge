let prompt = require(`prompt-sync`)();
let n = Number(prompt("Enter the number :"));
function factorial(n) {
    if (n === 1) return 1;
    return (factorial(n - 1) * n);
}
console.log(factorial(n));