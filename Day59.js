let s = "MCMXCIV";

var romanToInt = function (s) {

    const romanNumber = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000

    }

    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let current = romanNumber[s[i]];
        if (current < romanNumber[s[i + 1]]) sum -= current;
        else sum += current;

    }
    return sum;

}
console.log(romanToInt(s));