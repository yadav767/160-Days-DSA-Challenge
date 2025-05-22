function firstRepeatingElement(arr) {
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i];  // first repeating found
        }
        seen.add(arr[i]);
    }

    return null;  // no repeating element
}

// Example:
const arr = [10, 5, 3, 4, 3, 5, 6];
console.log(firstRepeatingElement(arr));  // Output: 5
