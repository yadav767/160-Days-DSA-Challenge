//Leetcode Problem 657: Robot Return to Origin
let moves = "UDLR";

var judgeCircle = function (moves) {
    let x = 0, y = 0;

    for (let m of moves) {
        if (m === 'U') y++;
        else if (m === 'D') y--;
        else if (m === 'L') x--;
        else if (m === 'R') x++;
    }

    return x === 0 && y === 0;

};
console.log(judgeCircle(moves));