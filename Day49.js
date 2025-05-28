let arr = [0, 10, 5, 2];


var peakIndexInMountainArray = function (arr) {

    let start = 0, end = arr.length - 1, ans = -1
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            ans = mid;
            end = mid;
        }
    }
    return ans;

}
console.log(peakIndexInMountainArray(arr))
