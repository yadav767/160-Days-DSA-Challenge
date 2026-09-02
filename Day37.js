//->Quick Sort algorithm .

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
  let pivot = arr[last]; //hum arr ke last element ko pivot manenge .
  let i = first - 1; //aur i hamesha first -1 se chalega ;
  for (let j = first; j < last; j++) {
    //hum j ko poore array pe chalayenge.
    if (arr[j] < pivot) {
      //agar j ka koi bhi element hamare pivot alement se chota aata hai.
      i++; // to sabse pehle hum jagah banayenge i ko ++ karke.
      swapElement(arr, i, j); //aur i ko ++ karne ke baad hum j waley element se swap karenge
    }
  }
  i++; //jab hamara j pivot ke pehle tak pahuch jaye to hum i ko ek badhayenge aur phir badhane ke baad hum usse apne pivot element se swap karenge.
  swapElement(arr, i, last);
  return i; //aur swap karne ke baad ji ith element hoga vo hamara naya pivot element hoga.
}

function swapElement(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
