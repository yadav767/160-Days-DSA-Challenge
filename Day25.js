let prompt = require(`prompt-sync`)();
let n = Number(prompt("Enter any number :"));
function printNnumbers(n) {
    if (n == 1) {
        console.log(`${n}`);
        return;

    }
    printNnumbers(n - 1);
    console.log(n);

}
printNnumbers(n);