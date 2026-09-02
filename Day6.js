/**
 Quesion= Isme aapko ek string di jayegi aapko uss string ko toggle karna hai and return karna hai.
 Answer=->hame pata hai ki upper case aur lower case ke letter mai 32 ka difference hota hai.
 ->To hum simply har ek element pe iterate karenge strinr ke and check karenge ki vo element upper case hai ya      lower case hai.
->Agar vo element upper case hua to usme hum 32 add kar denge , lekin agar vo elenent lower case hua to usme 32 minus kar denge.
->Aur minu karne ke baad hum unn element ko ek naye string mai ad karte jayenge, and last mai usko return karenge.
 */

let prompt = require(`prompt-sync`)();
let s = prompt("Enter the string : ");
let n = s.length;
let ans = "";
for (let i = 0; i < n; i++) {
    let ch = s.charCodeAt(i); // charAtCode()->This is used to convert any character into its ASCII code .
    if (s[i] >= 'A' && s[i] <= 'Z') {
        ans += String.fromCharCode(ch + 32);// fromCharCode()->This is used to convert ASCII code into its respective character.
    }
    else {
        ans += String.fromCharCode(ch - 32);
    }
}
console.log(ans);