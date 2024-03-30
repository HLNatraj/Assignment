//How to find out if the given two strings are anagrams or not?

function areAnagrams(str1, str2) {
    return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
    return str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
}

// Test cases
console.log(areAnagrams("listen", "silent"));   // Output: true
console.log(areAnagrams("hello", "world"));     // Output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Output: true
