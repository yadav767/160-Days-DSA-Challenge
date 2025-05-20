let prompt = require(`prompt-sync`)();
let n1 = prompt("Enter the first number: ");
let n2 = prompt("Enter the first number: ");
console.log(friendlyPair(n1, n2));

function friendlyPair(A, B) {
  let sum1 = divisorsSum(A);
  let sum2 = divisorsSum(B);
  let rem1 = sum1 / A;
  let rem2 = sum2 / B;
  if (rem1 == rem2) return true;
  else return false;
}

function divisorsSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) sum += i;
  }
  return sum;
}
