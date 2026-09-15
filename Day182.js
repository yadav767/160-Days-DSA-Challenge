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

// The board we'll check
// Row 0: 5 3 . | . 7 . | . . .
// Row 1: 6 . . | 1 9 5 | . . .
// Row 2: . 9 8 | . . . | . 6 .
// -------+-------+-------
// Row 3: 8 . . | . 6 . | . . 3
// Row 4: 4 . . | 8 . 3 | . . 1
// Row 5: 7 . . | . 2 . | . . 6
// -------+-------+-------
// Row 6: . 6 . | . . . | 2 8 .
// Row 7: . . . | 4 1 9 | . . 5
// Row 8: . . . | . 8 . | . 7 9
// Step 1: Set up the trackers
// javascript
// rows = [ {}, {}, {}, {}, {}, {}, {}, {}, {} ]   // 9 empty Sets
// cols = [ {}, {}, {}, {}, {}, {}, {}, {}, {} ]   // 9 empty Sets
// boxes = [ {}, {}, {}, {}, {}, {}, {}, {}, {} ]  // 9 empty Sets

// (I'm writing {} to represent an empty Set visually.)

// Step 2: Scan cell by cell, row by row

// Let's trace the first several cells in full detail, then speed up once the pattern is clear.

// Cell (0,0) = "5"

// boxIndex = Math.floor(0/3)*3 + Math.floor(0/3) = 0*3+0 = 0
// Check: rows[0].has("5")? No. cols[0].has("5")? No. boxes[0].has("5")? No.
// ✅ No violation → add "5" to all three:
// rows[0]  = {5}
// cols[0]  = {5}
// boxes[0] = {5}

// Cell (0,1) = "3"

// boxIndex = Math.floor(0/3)*3 + Math.floor(1/3) = 0+0 = 0
// Check: rows[0].has("3")? No. cols[1].has("3")? No. boxes[0].has("3")? No.
// ✅ Add:
// rows[0]  = {5, 3}
// cols[1]  = {3}
// boxes[0] = {5, 3}

// Cell (0,2) = "."

// Empty → skip immediately, nothing checked or added.

// Cell (0,4) = "7" (skipping (0,3) which is also ".")

// boxIndex = Math.floor(0/3)*3 + Math.floor(4/3) = 0+1 = 1
// Check: rows[0].has("7")? No. cols[4].has("7")? No. boxes[1].has("7")? No.
// ✅ Add:
// rows[0]  = {5, 3, 7}
// cols[4]  = {7}
// boxes[1] = {7}

// ...continuing through the rest of Row 0 (all empty except what we covered), Row 0 finishes with:

// rows[0] = {5, 3, 7}

// Jump ahead to Cell (1,0) = "6"

// boxIndex = Math.floor(1/3)*3 + Math.floor(0/3) = 0+0 = 0
// Check: rows[1].has("6")? No. cols[0].has("6")? No (cols[0] only has {5} so far). boxes[0].has("6")? No (boxes[0] = {5,3}).
// ✅ Add:
// rows[1]  = {6}
// cols[0]  = {5, 6}
// boxes[0] = {5, 3, 6}

// Cell (1,3) = "1"

// boxIndex = Math.floor(1/3)*3 + Math.floor(3/3) = 0+1 = 1
// Check: rows[1].has("1")? No. cols[3].has("1")? No. boxes[1].has("1")? No (boxes[1] = {7}).
// ✅ Add:
// rows[1]  = {6, 1}
// cols[3]  = {1}
// boxes[1] = {7, 1}

// Cell (1,4) = "9"

// boxIndex = Math.floor(1/3)*3 + Math.floor(4/3) = 0+1 = 1
// Check: boxes[1].has("9")? No (boxes[1] = {7,1}).
// ✅ Add: boxes[1] = {7, 1, 9}, rows[1] = {6,1,9}, cols[4] = {7, 9}

// Cell (1,5) = "5"

// boxIndex = Math.floor(1/3)*3 + Math.floor(5/3) = 0+1 = 1
// Check: rows[1].has("5")? No. cols[5].has("5")? No. boxes[1].has("5")? No (boxes[1] = {7,1,9}).
// ✅ Add: boxes[1] = {7,1,9,5}

// This process continues exactly the same way through every remaining filled cell in the grid — check all three Sets, if clean then add, if any Set already .has() the value then immediately return false.

// Fast-forwarding: does this board ever hit a violation?

// I've verified this is a well-known valid Sudoku board (no repeats in any row, column, or box). So the scan continues cell by cell, all the way to the last filled cell (8,8) = "9", with every single check passing cleanly — never finding a duplicate.

// Final step

// Once the nested loop finishes scanning all 81 cells without ever triggering return false:

// javascript
// return true;

// Final answer: true — this board is valid.