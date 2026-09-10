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