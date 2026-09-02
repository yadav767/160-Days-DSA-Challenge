//-> Cyclic sort.
//condition -> isme Fix number element hote hai jaise n number hai to n numbers ke ander tak hi element hone chaiye.

let arr = [1, 3, 5, 6, 7, 8, 9, 2, 4];
let i = 0;
function cycleSort(arr) {
  while (i < arr.length) {
    //hum ek i chlayenge poore array pe.
    let correctIdx = arr[i] - 1; //correct idx mai uss element se ek kam value rakhenge jaise agar arr ki value 3 hai to uska sahi position 3-1=2 hai kyuki arr 0 based indexiing hai .
    if (arr[i] != arr[correctIdx]) {
      let temp = arr[i];
      arr[i] = arr[correctIdx];
      arr[correctIdx] = temp;
    } else {
      i++;
    }
  }
  return arr;
}
console.log(cycleSort(arr));
