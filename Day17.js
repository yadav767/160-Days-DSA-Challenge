//You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

//For each index i, names[i] and heights[i] denote the name and height of the ith person.

//Return names sorted in descending order by the people's heights.

let names = ["ayush", "rohit", "rahul", "amit", "anuj"];
let heights = [12, 136, 100, 200, 50];
function sortThePeople(names, heights) {
    let map = new Map();
    let ans = new Array(heights.length)
    for (let i = 0; i < heights.length; i++) {//map mai set kardo do height aur name (key ans value)
        map.set(heights[i], names[i]);
    }
    heights.sort((a, b) => (b - a));//sort the height
    for (let i = 0; i < heights.length; i++) {
        ans[i] = map.get(heights[i]);//according the sorted height we will add it to our answer array
    }
    return ans;
}
console.log(sortThePeople(names, heights));
