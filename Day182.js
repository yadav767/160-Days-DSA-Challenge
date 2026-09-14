//Leetcode 36 : Valid suduko

const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

function isValidSuduko(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set())
    let boxes = new Array(9).fill(0).map(() => new Set())

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const value = board[row][col];

            if (value == ".") continue;

            const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            if (rows[row].has(value) || cols[col].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            rows[row].add(value);
            cols[col].add(value);
            boxes[boxIndex].add(value);

        }
    }
    return true;

}
console.log(isValidSuduko(board))