//Create a calculator to perform  sum, subraction, multiplication and division of 2 integers provided by user


// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    } else {
        return a / b;
    }
}

// Example numbers
var num1 = 10;
var num2 = 5;

// Perform operations
var sum = add(num1, num2);
var difference = subtract(num1, num2);
var product = multiply(num1, num2);
var quotient = divide(num1, num2);

// Display the results
console.log("Sum:", num1, "+", num2, "=", sum);
console.log("Difference:", num1, "-", num2, "=", difference);
console.log("Product:", num1, "*", num2, "=", product);
console.log("Quotient:", num1, "/", num2, "=", quotient);

/* Input
var num1 = 10;
var num2 = 5;
 */

/* Output
Sum: 10 + 5 = 15
Difference: 10 - 5 = 5
Product: 10 * 5 = 50
Quotient: 10 / 5 = 2  */
