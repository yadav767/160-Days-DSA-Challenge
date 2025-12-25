//Leetcode Problem 1704: Determine if String Halves Are Alike
let s = "book";

var halvesAreAlike = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let mid = s.length / 2;
    let c1 = 0, c2 = 0;

    for (let i = 0; i < mid; i++) {
        if (vowels.has(s[i])) c1++;
        if (vowels.has(s[i + mid])) c2++;
    }

    return c1 === c2;


};
console.log(halvesAreAlike(s));