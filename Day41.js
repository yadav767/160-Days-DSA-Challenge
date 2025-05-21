function findLargest(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example usage:
let numbers = [3, 5, 1, 8, 2];
console.log("Largest element is:", findLargest(numbers));
