// I am using var keyword
var a="123";
console.log(a); 

//I am using let keyword
let b='456';
console.log(b);

//I am using const keyword
const c=789;
console.log(c);

// alert("HELLO WORLD!!!")
// const age=prompt("How old are you?")
// console.log(age)

// const isBoss=confirm("Are you the boss?")
// console.log(isBoss)

//commits

//Using 
let x=1;
const y=2;
if (x==1){
    console.log("x is 1")
}

// & operator
if(x===1 && y===2){
    console.log("&&operator tested");
}

//OR || operator
if((x=1) || (y=3)) {
    console.log("||operator tested");
}

if(x!=2){
    console.log("!!!")
}

//NOT operator
if(!x){
    console.log("x is not true");
}

//ternary operator
if(x===1){
    console.log("x is 1")
}
else{
    console.log("x is not 1")
}
let result = x === 1?"x is 1" : "x is not 1";

for ( let i=0; i<5; i++){
    console.log(i)
}