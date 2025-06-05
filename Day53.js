function containsDuplicate(nums) {
    let seen = new Set();  // Hash set to store seen elements

    for (let num of nums) {
        if (seen.has(num)) {
            return true;   // Duplicate found
        }
        seen.add(num);
    }

    return false;  // No duplicates found
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 4]));    // false
console.log(containsDuplicate([1, 2, 3, 1]));    // true
