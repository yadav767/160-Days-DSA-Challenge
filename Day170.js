//Leetcode - Problem 1812: Determine Color of a Chessboard Square
let coordinates = "a1";
var squareIsWhite = function (coordinates) {
    let col = coordinates.charCodeAt(0) - 96;
    let row = Number(coordinates[1]);
    return (col + row) % 2 === 1;

};
console.log(squareIsWhite(coordinates));