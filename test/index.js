// I am using var keyword
// var a="123";
// console.log(a); 

//I am using let keyword
// let b='456';
// console.log(b);

//I am using const keyword
// const c=789;
// console.log(c);

// alert("HELLO WORLD!!!")
// const age=prompt("How old are you?")
// console.log(age)

// const isBoss=confirm("Are you the boss?")
// console.log(isBoss)

//commits

//Using 
// let x=1;
// const y=2;
// if (x==1){
//     console.log("x is 1")
// }

// // & operator
// if(x===1 && y===2){
//     console.log("&&operator tested");
// }

//OR || operator
// if((x=1) || (y=3)) {
//     console.log("||operator tested");
// }

// if(x!=2){
//     console.log("!!!")
// }

//NOT operator
// if(!x){
//     console.log("x is not true");
// }

//ternary operator
// if(x===1){
//     console.log("x is 1")
// }
// else{
//     console.log("x is not 1")
// }
// let result = x === 1?"x is 1" : "x is not 1";

// for ( let i=0; i<5; i++){
//     console.log(i)
// }

//learning about functions
// function add(a,b){
//     // return a+b;
//     console.log(a+b);
// }

// add(1,2);
// add(4,5);

//function in ES6 style / arrow function
// const add = (a,b) => {
//     console.log(a+b);
// }

// add(1,2)
// add(4,5)

// function area(a,b){
//     return a*b;
// }

//OBJECT
// const person ={
//     firstName: "Shakti", 
//     lastName: "Rajbhandari",
//     fullName: function (){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const p=person.fullName();
// console.log(p);

//ARRAY
const arr =["BMW","Mercedes","Nissan","Honda","Mazda"];
//access the first item
const o=arr[0];
//access the last item
const e= arr[arr.length-1];
console.log(o);
console.log(e);
console.log(arr.length);
console.log(arr.sort());
console.log(arr.push("Hyundai"));
console.log(arr.pop());

// const myFunction=(data)=>{
//     console.log(data);
// }

arr.map(d=> console.log(d));

//User Model
const user={
    firstName: "Shakti",
    lastName: "Rajbhandari",
    email: "shaktirajbhandari@gmail.com",
    address: "Kumaripati",
    phone: "9818594363",
    password: "123456",
};

//User list
const {password,phone, ...rest}=user;
console.log({rest});

const {x, ...other} ={x:1,y:2,z:3}
console.log(other);

const [first, ...other1]=arr;
console.log(other1);

// const myFunction=(data)=>{
//     return data.toUpperCase();
// };
// const newUpperCase=other.map(myFunction)
// console.log({newUpperCase});

//JS GOOD PRACTICES
//1. Avoid global variables
//2. Always declare local variables
//3. Declarations on top
//4. Initialize variables
//5. Declare objects with const
//6. Declare arrays with const
//7. Use === comparison
//8. Use parameter defaults while using functions

const myName=(salutation, name) =>{
    if (salutation === "") {
        salutation = salutation || "Mr";
    }
    console.log(`${salutation} ${name}`);
};

myName("","John");
