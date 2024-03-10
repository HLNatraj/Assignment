/* 8. Implement string reversal. dont use builtin function */

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
const originalString = 'Natraj';
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

/* Input
const originalString = 'Natraj'; */

/* Output:
Original string: Hello, world!
Reversed string: !dlrow ,olleH */
