// Leetcode 26. Remove Duplicates from Sorted Array

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}

console.log(removeDuplicates(nums));





// Let's trace it fully with a fresh example — nums = [1, 1, 2, 3, 3].

// Setup
// nums = [1, 1, 2, 3, 3]
//         0  1  2  3  4   ← indices
// slow = 0 (points to index 0, value 1 — treated as automatically unique, nothing to compare it against yet)
// fast will start at index 1 and walk forward
// Step-by-step trace

// fast = 1: nums[fast] = nums[1] = 1, nums[slow] = nums[0] = 1

// Are they equal? Yes (1 === 1) → this is a duplicate.
// Action: do nothing except let fast move to the next iteration.
// Array unchanged: [1, 1, 2, 3, 3], slow stays at 0

// fast = 2: nums[fast] = nums[2] = 2, nums[slow] = nums[0] = 1

// Are they equal? No (2 ≠ 1) → found a new unique value!
// Action: move slow forward by 1 → slow = 1. Then copy nums[fast] (which is 2) into nums[slow]'s new position (index 1).
// Array becomes: [1, 2, 2, 3, 3] ← notice index 1 changed from 1 to 2
// slow = 1

// fast = 3: nums[fast] = nums[3] = 3, nums[slow] = nums[1] = 2

// Are they equal? No (3 ≠ 2) → new unique value!
// Action: slow++ → slow = 2. Copy nums[3]=3 into nums[2].
// Array becomes: [1, 2, 3, 3, 3] ← index 2 changed from 2 to 3
// slow = 2

// fast = 4: nums[fast] = nums[4] = 3, nums[slow] = nums[2] = 3

// Are they equal? Yes (3 === 3) → duplicate.
// Action: do nothing, just let the loop end (fast was the last index).
// Array unchanged: [1, 2, 3, 3, 3], slow stays at 2
// Loop ends (fast has gone past the last index)

// Final state:

// nums  = [1, 2, 3, 3, 3]
// slow  = 2
// What do we return?

// slow = 2 is an index — it points to the last position holding a unique value. To get the count of unique values, we need slow + 1 (since indices start at 0, "index 2" means there are 3 elements at positions 0, 1, 2).

// Return: slow + 1 = 3
