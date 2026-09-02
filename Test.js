let names = ["ayush", "rohit", "rahul", "amit", "anuj"];
let heights = [12, 136, 100, 200, 50];

function sortPeopleByHeight(names, heights) {
    let map = new Map()
    let ans = new Array(heights.length)
    //Put values in the map like height->name

    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i])
    }
    //sort
    heights.sort((a, b) => (b - a))

    for (let j = 0; j < heights.length; j++) {
        ans[j] = (map.get(heights[j]))
    }
    return ans
}
console.log(sortPeopleByHeight(names, heights));