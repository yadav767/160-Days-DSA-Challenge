var generate = function (numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1); // fill row with 1s

        for (let j = 1; j < i; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }

        res.push(row);
    }

    return res;
};
