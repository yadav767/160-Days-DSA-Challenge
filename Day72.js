// 5. Longest Palindromic Substring;


let s = "babad";

var expand = (start, end, s) => {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return s.slice(start + 1, end);

}
var longestPalindrome = function (s) {
    if (s.length <= 1) return s
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i, s);
        let even = expand(i, i + 1, s);
        if (odd.length > longest.length) {
            longest = odd;
        }
        if (even.length > longest.length) {
            longest = even;
        }

    }
    return longest;

}
console.log(longestPalindrome(s));