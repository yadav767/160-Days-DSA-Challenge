//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

let nums = [10, 2, -2, -20, -10];
let k = -10;

var subarraySum = function (nums, k) {
    let map = new Map();//hum (sum-frequency ) ka map banayenge;
    let sum = 0, count = 0;
    map.set(sum, 1);// hum ek map banayenge initially usme hum sum joki 0 hai uske frequency 1 hai
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) { // hum check karenge ki sum -k ki value hamare map mai belong karti hai ya nahi ?
            count += map.get(sum - k) // agar karti hai to to jo value karti hai uski jo value hogi usko hum apne count varible mai add kar denge.
        };

        // iske neeche waley steps ko hum har baar karenge .
        if (map.has(sum)) { // check karenge ki agar sum ki value already exist kar rahi hogi to hum  simply hum uski freq ek badhadenge .
            map.set(sum, map.get(sum) + 1);
        } else {//agar sum ki value exsist nahi karti hogi to matlab nayi value hai usko hum map kar denge and initially uski freq 1 hogi .
            map.set(sum, 1);
        }



    }
    return count;
}
console.log(subarraySum(nums, k))