let prompt = require(`prompt-sync`)();
let n = Number(prompt("Enter the number :"));
function sum(n) {
    if (n === 1) return 1;
    return (sum(n - 1) + n);
}
console.log(sum(n));