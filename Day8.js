/**
 *Question = Isme ek string di rahi hogi A = "adhaihbtba" aur isko aapko sort karna hai .
 */

function countSort(A) {
    let n = A.length;
    let max = A.charCodeAt(0);  // Hum maan lete hai ki pehla character hi sabse bada hoga .

    for (let i = 1; i < n; i++) {
        if (A.charCodeAt(i) > max) {// Hum sabse pehle given string mai sabse bada character konsa hai usko pata lagayenge .
            max = A.charCodeAt(i);
        }
    }

    let freq = new Array(max + 1).fill(0);

    for (let i = 0; i < n; i++) {
        freq[A.charCodeAt(i)]++;//Pata lagane ke baad hum ek ek character pe iterate karnge and uss perticular character waley index ko 
        // increase kar denge , isse ye pata chala jayenga ki kon sa character kitni baar aya hai.
    }

    let ans = [];
    for (let i = 0; i <= max; i++) { // Har ek index ek ASCII value ko bata raha jais A ki ASCII code hai 65 to 65 wala index A ko represent kar raha ahi .
        while (freq[i] > 0) { //Har ek index mai jitni value hogi utni baar uss index ke respective mai uss character ko add kar denga.
            ans.push(String.fromCharCode(i));
            freq[i]--;
        }
    }

    return ans;
}

let A = "adhaihbtba";
console.log(countSort(A));
