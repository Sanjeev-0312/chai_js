console.log("firstName, lastName, age, isLoggedIn, state, country");
// Variable declaration
const accountId ="1234567890";      //const value cannot be changed

let accountEmail = "0312sanjeev@gmail.com"; //let value can be changed

// prefer not to use var because of issue in block scope (if (10 > 20) {
// let greeting = "hi";
// return greeting} let and const are the block scope ) and functional scope ( function theYear() {
// let text= "the year is"
// return text + " " + year;}).
let accountState; // If value cann't be defined then it will so Undefined Result
var accountPassword = "1234567890"; //var value can be changed

console.table([accountPassword, accountEmail, accountId, accountState]);
