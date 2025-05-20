function factorial(n) {
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
function permutations(persons, seats) {
  let ans = Math.floor(factorial(persons) / factorial(persons - seats));
  return ans;
}

console.log(permutations(5, 3));
