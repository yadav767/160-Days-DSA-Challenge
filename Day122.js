// Function to find the minimum number of platforms required for the trains to arrive and depart without any delay
let arr = [900, 940, 950, 1100, 1500, 1800];
let dep = [910, 1200, 1120, 1130, 1900, 2000];
function minimumNumberOfPlatforms(arr, dep) {
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    let i = 0, j = 0;
    let platform = 0, maxPlatform = 0;
    while (i < arr.length) {
        if (arr[i] <= dep[j]) {
            platform++;
            i++;
        } else {
            platform--;
            j++;
        }
        maxPlatform = Math.max(maxPlatform, platform);
    }
    return maxPlatform;

}
console.log(minimumNumberOfPlatforms(arr, dep));