//Neon number vo number hote hai jinka square kare and then uss square number ke digit ka sum kare aur vo sum agar original number ke barabar aa jaye to neon number hai.

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
