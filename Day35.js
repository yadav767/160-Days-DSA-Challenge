let arr = [1, 3, 5, 6, 7, 8, 9, 2, 4];
let i = 0;
while (i < arr.length) {
  let correctIdx = arr[i] - 1;
  if (arr[i] != arr[correctIdx]) {
    let temp = arr[i];
    arr[i] = arr[correctIdx];
    arr[correctIdx] = temp;
  } else {
    i++;
  }
}
console.log(arr);
