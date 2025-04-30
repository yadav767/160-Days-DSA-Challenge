let names = ["ayush", "rohit", "rahul", "amit", "anuj"];
let heights = [12, 136, 100, 200, 50];
function sortThePeople(names, heights) {
    let map = new Map();
    let ans = new Array(heights.length)
    for (let i = 0; i < heights.length; i++) {
        map.set(heights[i], names[i]);
    }
    heights.sort((a, b) => (b - a));
    for (let i = 0; i < heights.length; i++) {
        ans[i] = map.get(heights[i]);
    }
    return ans;
}
console.log(sortThePeople(names, heights));
