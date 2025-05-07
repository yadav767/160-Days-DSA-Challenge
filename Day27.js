let prompt = require(`prompt-sync`)();
let base = prompt("Enter the base :");
let expo = prompt("Enter the exponent :");
function power(b, e) {
    if (e == 0) return 1;
    return b * power(b, e - 1);
}
console.log(power(base, expo));