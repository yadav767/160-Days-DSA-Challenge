//Leetcode 6: ZigZag Conversion
const s = "PAYPALISHIRING";
const numRows = 7;

function convert(s, numRows) {

    if (numRows == 1) return s;

    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = true;
    for (let char of s) {
        rows[currentRow] += char;
        if (currentRow == 0) goingDown = true;
        else if (currentRow == numRows - 1) goingDown = false;

        if (goingDown) currentRow++;
        else currentRow--;

    }

    return rows.join("");

}

console.log(convert(s, numRows));