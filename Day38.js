let prompt = require(`prompt-sync`)();
let n = prompt("Enter any number:");

function neonNUmber(num) {
  let square = num * num;
  let sum = 0;
  while (square) {
    let rem = square % 10;
    sum += rem;
    square = Math.floor(square / 10);
  }
  if (sum == num) return true;
  else return false;
}

console.log(neonNUmber(n));
