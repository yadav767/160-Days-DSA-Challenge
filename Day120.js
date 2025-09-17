let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 4;

function distinctElemnts(arr, k) {
    let n = arr.length;
    let map = new Map()
    let ans = []
    for (let i = 0; i < k; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    ans.push(map.size)
    let s = 1, e = k;
    while (e < n) {
        map.set(arr[s - 1], map.get(arr[s - 1]) - 1);
        if (map.get(arr[s - 1]) == 0) {
            map.delete(arr[s - 1])
        }
        if (map.has(arr[e])) {
            map.set(arr[e], map.get(arr[e]) + 1);
        } else {
            map.set(arr[e], 1);
        }
        s++;
        e++;
        ans.push(map.size)
    }
    return ans
}
console.log(distinctElemnts(arr, k))