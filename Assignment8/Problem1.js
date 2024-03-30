//Determine if a string/number is a palindrome?

function isPalindrome(input) {
    // Convert the input to a string
    input = String(input);
    
    // Compare the input with its reverse
    return input === input.split('').reverse().join('');
}

console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome(12321));   // Output: true
console.log(isPalindrome(12345));   // Output: false
