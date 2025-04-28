let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 14];
let ans = new Array(arr1.length + arr2.length)
let i = 0, j = 0, k = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        ans[k] = arr1[i];
        k++, i++;
    }
    else {
        ans[k] = arr2[j];
        k++, j++;
    }
}
while (i < arr1.length) {
    ans[k] = arr1[i];
    k++, i++;
}
while (j < arr2.length) {
    ans[k] = arr2[j];
    k++, j++;
}
console.log(ans);