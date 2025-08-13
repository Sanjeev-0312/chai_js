console.log("2">1);
console.log("02">1);


console.log(null > 0);  //the reason is that an equality check == and comparions ><>=   <= work differently.
console.log(null == 0); //comparisons convert null to a number, treating it as 0.
console.log(null >= 0); //That's why (3)null >= 0  is true and (1) null > 0 is false


console.log(typeof undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(typeof "2"===2);
