//-> Pangram sentence are those sentence in which every alphabet has to appear at least once ;


let sentence = "qwertyuiopsdfghjklzxcvbnm";
function isPangran(sentence) {
    let set = new Set();//created set
    for (let i = 0; i < sentence.length; i++) { //inserted each character of the string in the set
        let ch = sentence.charAt(i);
        set.add(ch);
    }
    return set.size === 26;//compared that it has to be 26
};
console.log(isPangran(sentence));
