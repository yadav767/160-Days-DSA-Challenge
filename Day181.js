//Leetcode : 17. Letter Combinations of a Phone Number

function letterCombinations(digits) {
    const keypad = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let combinations = [""];

    for (let i = 0; i < digits.length; i++) {
        const digitString = keypad[digits[i]];

        let newCombinations = [];

        for (let j = 0; j < combinations.length; j++) {
            for (let k = 0; k < digitString.length; k++) {
                newCombinations.push(combinations[j] + digitString[k]);
            }
        }

        combinations = newCombinations;

    }

    return combinations;

}

console.log(letterCombinations("2394"));


// Approach 1: Build It Up Step-by-Step (Iterative Expansion)

// Core idea: Start with just one "empty" combination, and for each new digit, take every combination you've built so far and branch it out by attaching each possible letter for that digit.

// Let's trace "23" by hand:

// Start:

// combinations = [""]   (just one empty starting point)

// Process digit 2 (letters: a, b, c) — take every existing combination and attach each letter:

// "" + "a" = "a"
// "" + "b" = "b"
// "" + "c" = "c"

// combinations = ["a", "b", "c"]

// Process digit 3 (letters: d, e, f) — take every existing combination (a, b, c) and attach each letter:

// "a" + "d" = "ad"
// "a" + "e" = "ae"
// "a" + "f" = "af"
// "b" + "d" = "bd"
// "b" + "e" = "be"
// "b" + "f" = "bf"
// "c" + "d" = "cd"
// "c" + "e" = "ce"
// "c" + "f" = "cf"

// combinations = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// No more digits left → this is your final answer.

// Why this works: Each round, your list of combinations grows by a factor of "how many letters this digit has" — you're essentially building the full combination table one digit at a time, always branching off of everything you've built so far.

// Mental model: Think of it like building a tree, level by level — level 1 has 3 branches (a,b,c), and each of those branches into 3 more (d,e,f) at level 2, giving 9 total leaf nodes (final combinations).