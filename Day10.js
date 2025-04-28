// Tumhe ek string di hogi and tumhe us string ke har  ek word ke first and last charactr and lact character ko uppercase mai karn ahia hia.
let str = "hello ayush kya  haal chal"
let arrStr = str.split(" ");// usko split karenge ek array mai
let ans = "";
for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i];// Har ek word ko access karnge.
    if (word.length === 2) ans += word.toUpperCase() + " "; //agar do hi word hua to to dono upper case ho jayenge 
    else {
        ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1) + word.charAt(word.length - 1).toUpperCase() + " ";
    }// Uske baad har ek word ko uppercase karenge and beech wala substring ki madad se add kar denge simply and last wala word bhi uppercase kar denge .

}
console.log(ans);
