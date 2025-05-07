let prompt = require(`prompt-sync`)();
let n = prompt("Enter any number :");
function print(n) {
    if (n == 0) return;
    console.log(n);
    return print(n - 1);

}
print(n);