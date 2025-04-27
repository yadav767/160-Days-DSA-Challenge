let str = "makayalam";
let isPalindrome = true;
let i = 0;
let j = str.length - 1;
while (i < j) {
    if (str[i] != str[j]) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}
if (isPalindrome) console.log("yes it is palindromic");
else console.log("Not palindromic");
