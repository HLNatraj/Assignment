/* 7. Implement your own search function for strings. dont use builtin function */

function searchString(string, pattern) {
    // Edge case: If pattern is longer than the string, return -1
    if (pattern.length > string.length) {
        return -1;
    }

    // Loop through the string
    for (let i = 0; i <= string.length - pattern.length; i++) {
        // Check if the current substring matches the pattern
        let found = true;
        for (let j = 0; j < pattern.length; j++) {
            if (string[i + j] !== pattern[j]) {
                found = false;
                break;
            }
        }
        // If pattern is found, return the index
        if (found) {
            return i;
        }
    }
    // If pattern is not found, return -1
    return -1;
}

// Test the function
const string = "hello world";
const pattern = "world";
console.log("Index of pattern:", searchString(string, pattern));


/* Input 
const string = "hello world";
const pattern = "world"; */

/* output:Index of pattern: 6 */