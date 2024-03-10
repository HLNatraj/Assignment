/* 6. how iterate over an object data? explain with an example */

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using a for...in loop
console.log("Using a for...in loop:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

/* Input
 const person = {
    name: "John",
    age: 30,
    city: "New York"
}; */


/* Output
Using a for...in loop:
name: John
age: 30
city: New York */