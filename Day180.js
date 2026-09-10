//Leetcode 12 : Convert integer to roman
const num = 800;

function integerToRoman(num) {
    const romanTable = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let roman = "";

    while (num) {
        let checkNumber = num;
        for (let i = 0; i < romanTable.length; i++) {
            if (checkNumber >= romanTable[i].value) {
                roman += romanTable[i].symbol;
                num = num - romanTable[i].value;
                break;
            }
        }
    }

    return roman

}

console.log(integerToRoman(num));

// Current number	Check against	Fits?	Action	Result so far
// 1994	  1000 (M)	Yes	subtract 1000, append "M"	"M"
// 994	  1000 (M)	No	move to next	"M"
// 994	  900 (CM)	Yes	subtract 900, append "CM"	"MCM"
// 94	  900 (CM)	No	move to next	"MCM"
// 94	500, 400, 100	No	skip these	"MCM"
// 94	90 (XC)	Yes	subtract 90, append "XC"	"MCMXC"
// 4	50, 40, 10, 9, 5	No	skip these	"MCMXC"
// 4	4 (IV)	Yes	subtract 4, append "IV"	"MCMXCIV"
// 0	—	number is 0	done	"MCMXCIV"