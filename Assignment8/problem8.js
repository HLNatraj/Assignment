/* 8. How would you swap two numbers without using a third variable? */

let a = 5;
let b = 10;

// Swap values of a and b
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 5
