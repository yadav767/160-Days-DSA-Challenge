let arr = [12, 4, 5, 6, 34, 76, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

function quickSort(arr, first, last) {
  if (first >= last) return;
  let piIdx = partitionPivot(arr, first, last);
  quickSort(arr, first, piIdx - 1);
  quickSort(arr, piIdx + 1, last);
}

function partitionPivot(arr, first, last) {
  let pivot = arr[last];
  let i = -1;
  for (let j = first; j < last; j++) {
    if (arr[j] < pivot) {
      i++;
      swapElement(arr, i, j);
    }
  }
  i++;
  swapElement(arr, i, last);
  return i;
}

function swapElement(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
