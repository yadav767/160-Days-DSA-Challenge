//Leetcode Problem 1773: Count Items Matching a Rule
let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
let ruleKey = "color";
let ruleValue = "silver";

var countMatches = function (items, ruleKey, ruleValue) {
    let index;

    if (ruleKey === "type") index = 0;
    else if (ruleKey === "color") index = 1;
    else index = 2;

    let count = 0;
    for (let item of items) {
        if (item[index] === ruleValue) {
            count++;
        }
    }

    return count;

};
console.log(countMatches(items, ruleKey, ruleValue));