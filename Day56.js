//2206 -Divide Array Into Equal Pairs

//basically isme aapko ek array diya hoga and use aapko pairs banane honge and vo pair kuch iss prakar honge ki vo pairs mai dono element same hone chaiye matlab array mai jitne bhi element honge sab do ya do ke pairs mai hi honge agar ek bhi element odd number of times hai to vo false return karega jaise ki hum nums arrray ma dekh sakte hai  sab ek hi bar hai to ye salse return karenga ;

//-> Hum map ka use karenge and har ek element ka frequency store karenge and check karene ko saare element ki frequency 2 se divisible ho rahi hai ya nahi agar mahi ho rahi hai to vo false return karega ;


//-> Hum simply isko map se karenge 
nums = [1, 2, 3, 4];
var divideArray = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) % 2 != 0) return false;
    }
    return true;
}
console.log(divideArray(nums));