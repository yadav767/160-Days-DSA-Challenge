//Leetcode 8 : String to Integer (atoi)

const s = "    -a1337c0d3";

function stringToInteger(s) {
    const MAX_INTEGER = 2147483647;
    const MIN_INTEGER = -2147483648;
    let result = 0;
    let sign = "";
    let start = false;
    for (const char of s) {
        if (char == " ") {
            if (start) break;
            continue;
        }

        if ((char == "-" || char == "+") && !start) {
            sign += char;
            start = true;
            continue;
        }

        if (char >= '0' && char <= '9') {
            let data = Number(char);
            result = (result * 10) + data;
            start = true;
            continue;
        }

        break;

    }

    if (sign == "-") result = -result;

    if (result > MAX_INTEGER) return MAX_INTEGER;
    if (result < MIN_INTEGER) return MIN_INTEGER;

    return result;

}

console.log(stringToInteger(s));