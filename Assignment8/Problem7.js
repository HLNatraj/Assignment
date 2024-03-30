/* Substring search - Given a string, find the pattern provide by user? if yes, print the index of
 the substring else print -1 */

 function findPatternIndex(text, pattern) {
    return text.indexOf(pattern);
}

// Example usage
const text = "Hello, how are you?";
const pattern = "how";

const index = findPatternIndex(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index `,index);
} else {
    console.log("Pattern not found");
}
