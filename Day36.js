function isAbundant(number) {
  let sum = 0;

  // Proper divisors find kar rahe hain
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  // Abundant check
  if (sum > number) {
    console.log(`${number} is an Abundant number.`);
  } else {
    console.log(`${number} is NOT an Abundant number.`);
  }
}

// Example usage
isAbundant(12); // Output: 12 is an Abundant number.
isAbundant(10); // Output: 10 is NOT an Abundant number.
