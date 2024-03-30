//Find the number of occurrences of a character in a String?

function countOccurrences(str, char) {
    // Initialize a counter variable
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // If the current character matches the target character, increment the counter
        if (str.charAt(i) === char) {
            count++;
        }
    }

    // Return the count of occurrences
    return count;
}

// Test cases
console.log(countOccurrences("hello", "l")); // Output: 2
console.log(countOccurrences("apple", "p")); // Output: 2
console.log(countOccurrences("banana", "a")); // Output: 3
