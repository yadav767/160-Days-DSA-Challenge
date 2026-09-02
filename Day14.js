// Happy numbers vo numbers hote hai jiska square karne pe jo answer aye uska fir se square kare and tab tak kare jab tak 1 na aaa jaye agar 1 aa gaya to vo ek happy number hai.

let n = 19;
function happyNumber(n) {
    let set = new Set();// Ek set banaya hia
    while (true) { // infinite loop
        let sum = 0;
        while (n > 0) {
            let rem = n % 10;
            sum += (rem * rem);
            n = Math.floor(n / 10);
        }
        if (sum == 1) return true;
        else if (set.has(sum)) return false;
        else set.add(sum);
        n = sum;
    }
}
console.log(happyNumber(n));
