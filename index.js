console.log("Welcome");
//1.Question add two number
// let a=2;
// let b=5;
// console.log(a+b);
function myFunction(a,b)
{
return a+b;
}
let x=myFunction(2,5);
console.log(x);
//2.Question Find if the conditions are obeyed or not? 
let A1=5;
let B1=3;
console.log(A1<10 && A1>B1)
//3.Question Check the conditions
let a=10;
let b=20;
console.log(a%10==0 && b%10==0);
console.log(a%10!=0 && b%10!=0);
a=12;
console.log(a%10==0 || b%10==0);
//4.Find the first digit of a 4 digit number
let num=4567;
let res=Math.floor(num/1000);
console.log(res);
//5. Question Find the last digit of a 4 digit number
let num1=4567;
let res1=Math.floor(num1%10);
console.log(res1);
//6.Question Find the remainder
let A=2;
let B=9;
let res2=Math.floor(B%A);
console.log(res2);
//7.Question Multiply two Numbers
let c=2;
let d=5;
console.log(c*5);
//8.Question Marks Calculator
let numb=50;
let numb1=20;
let numb2=100;
let sum=numb+numb1+numb2;
let avg=sum/3;
console.log(sum+" "+avg.toFixed(2));
