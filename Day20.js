let prompt = require(`prompt-sync`)();
let a = prompt("Enter a first number :");
let b = prompt("Enter a second number :");
console.log(a, b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);


