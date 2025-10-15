//Leetcode Problem 1431: Kids With the Greatest Number of Candies
let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies); // sabse zyada candies kisi ke paas
    return candies.map(candy => candy + extraCandies >= max);

};
kidsWithCandies(candies, extraCandies);