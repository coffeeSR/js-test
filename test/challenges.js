//0-a. Write a JavaScript program that prints 'Hello World'.
var a = "Hello World!";
console.log(a);

//0-b. Write a JavaScript program to set the value of PI.
const pi=3.14;
console.log(pi);

//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
function Sum(a,b){
    if(a==b){
        return 3*(a+b);
    }
    else{
        return a+b;
    }
}

console.log(Sum(4,5));
console.log(Sum(5,5));

//2. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function Multiple(a){
    if (a % 3==0 || a%7==0){
        return true;
    }
    else{
        return false;
    }
}
var x=21;
var y=25;
var isMultiple = Multiple(x);
if(isMultiple){
    console.log(x + " is a multiple of 3 or 7");
}
else{
    console.log(x + " is not a multiple of 3 or 7");
}

var isMultiple = Multiple(y);
if(isMultiple){
    console.log(y + " is a multiple of 3 or 7");
}
else{
    console.log(y + " is not a multiple of 3 or 7");
}

//3. Write a JavaScript program to get the current date.
