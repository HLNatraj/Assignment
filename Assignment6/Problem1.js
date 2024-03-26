/* Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 10^6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6. */


function countAmazingSubstrings(S) {
    let count = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (isVowel(S[i])) {
            count += S.length - i;
        }
    }
    
    return count % 10003;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
}

// Example usage:
const S = "ABEC";
console.log(countAmazingSubstrings(S)); // Output: 6
