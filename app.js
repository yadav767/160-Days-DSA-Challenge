let prompt = require('prompt-sync')();
let n = Number(prompt("Enter any number :"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`);
    }
    console.log();

}