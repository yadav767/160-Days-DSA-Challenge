let prompt=require(`prompt-sync`)();
let n=Number(prompt("Enter any number to check: "));
let copy=n;
let sum=0;
while(n){
    let rem=n%10;
    sum+=rem;
    n=Math.floor(n/10);
}
if(copy%sum==0) console.log("Harshad number ");
else console.log("Not harshad number");