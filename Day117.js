//leetcode 455-Assign Cookies

let g = [1, 2, 3], s = [1, 1]
var findContentChildren = function (g, s) {
    let m = s.length
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let l = 0, r = 0;
    while (l < m) {
        if (g[r] <= s[l]) {
            r = r + 1;
        }
        l = l + 1
    }
    return r


};
console.log(findContentChildren(g, s));