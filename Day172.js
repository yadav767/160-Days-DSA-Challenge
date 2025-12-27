//Leetcode Problem 1720: Decode XORed Array
let encoded = [1, 2, 3];
let first = 1;

var decode = function (encoded, first) {
    let arr = [first];

    for (let i = 0; i < encoded.length; i++) {
        arr.push(arr[i] ^ encoded[i]);
    }

    return arr;
};
console.log(decode(encoded, first));