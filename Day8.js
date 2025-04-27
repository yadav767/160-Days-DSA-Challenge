function countSort(A) {
    let n = A.length;
    let max = A.charCodeAt(0);

    for (let i = 1; i < n; i++) {
        if (A.charCodeAt(i) > max) {
            max = A.charCodeAt(i);
        }
    }

    let freq = new Array(max + 1).fill(0);

    for (let i = 0; i < n; i++) {
        freq[A.charCodeAt(i)]++;
    }

    let ans = [];
    for (let i = 0; i <= max; i++) {
        while (freq[i] > 0) {
            ans.push(String.fromCharCode(i));
            freq[i]--;
        }
    }

    return ans;
}

let A = "adhaihbtba";
console.log(countSort(A));
