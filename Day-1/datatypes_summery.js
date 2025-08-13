 //JavaScript is a Dynamic language and not a Static.

// Data types are two types
// 1. Primitive (call by Value) {String, Number, Boolean, Null, Undefined, Symbol, BigInt}

const score = "100"
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 243524563246247n

console.log(bigNumber);

// 2 . Non Primitive  [Reference type] { Array, Objects, Functions }
//Array
const heros = ["shaktiman", "hanuman", "rama"];

// Object

let myObj ={
    name: "sanjeev",
    age : 22,
}
//Function

const myFunction = function(){

    console.log("hello world");
}
console.log(typeof score);


// Js  Memory Types

// Stack (Primitive), Heap (Non-Primitive)

let myClass = "Sanjeev"
let anotherName= "myClass"
anotherName = "Chauhan"

console.log(myClass);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

// userTwo.email = "ship@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
