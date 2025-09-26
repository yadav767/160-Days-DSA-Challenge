//Leetcode-2011. Final Value of Variable After Performing Operations
let
var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "++X" || operations[i] === "X++") {
            x++;
        } else {
            x--;
        }
    }
    return x;

};
console.log(finalValueAfterOperations(operations));