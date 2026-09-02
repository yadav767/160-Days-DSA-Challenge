
//->isko set ki madad se karna hia.


let s = "malayalam";
let t = "llaaaaymm"
function isAnagram(s, t) {

    let freq = new Array(123).fill(0);
    for (let i = 0; i < s.length; i++) {//perticular character index ko increase karo.
        let ascii = s.charCodeAt(i);
        freq[ascii]++;
    }
    for (let i = 0; i < t.length; i++) {//fir increase karne ke baad decrease karo 
        let ascii = t.charCodeAt(i);
        freq[ascii]--;
    }
    for (let i = 0; i < freq.length; i++) {//agar koi bhi zero nahi bacha to anagram nahi hota.
        if (freq[i] != 0) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram(s, t));
