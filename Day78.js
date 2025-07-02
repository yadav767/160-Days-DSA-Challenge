//1209. Remove All Adjacent Duplicates in String II

let s = "abcd", k = 2;

var removeDuplicates = function (s, k) {

    let stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
        } else {
            stack.push([char, 1]);
        }

        if (stack[stack.length - 1][1] === k) {
            stack.pop();
        }
    }

    let result = "";
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }

    return result;
}