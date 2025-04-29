let stones = "aAAbbbb";
let jewels = "aA";
function countJewels(stones, jewels) {
    let set = new Set(jewels);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count++;
        }
    }
    return count;
}
console.log(countJewels(stones, jewels));
