let prompt = require(`prompt-sync`)();
let s = prompt("Enter the string : ");
let n = s.length;
let ans = "";
for (let i = 0; i < n; i++) {
    let ch = s.charCodeAt(i);
    if (s[i] >= 'A' && s[i] <= 'Z') {
        ans += String.fromCharCode(ch + 32);
    }
    else {
        ans += String.fromCharCode(ch - 32);
    }
}
console.log(ans);