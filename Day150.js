//Leetcode Problem: 1678. Goal Parser Interpretation
let command = "G()(al)";
var interpret = function (command) {
    return command.replaceAll("()", "o").replaceAll("(al)", "al");
};
console.log(interpret(command));