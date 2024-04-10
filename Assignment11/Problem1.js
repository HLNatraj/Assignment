/* Check Palindrome

Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.



Problem Constraints
1 <= |A| <= 50000

String A consists only of lowercase letters.



Input Format
The first and only argument is a string A.



Output Format
Return 1 if the string A is a palindrome, else return 0.



Example Input
Input 1:

 A = "naman"
Input 2:

 A = "strings"


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 "naman" is a palindomic string, so return 1.
Explanation 2:

 "strings" is not a palindrome, so return 0. */

 function isPalindrome(A) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (A.length <= 1) {
        return 1;
    }
    
    // Compare the first and last characters
    if (A[0] !== A[A.length - 1]) {
        return 0; // Not a palindrome
    }
    
    // Recur with the substring excluding the first and last characters
    return isPalindrome(A.substring(1, A.length - 1));
}


const A1 = "naman";
const A2 = "strings";

console.log(isPalindrome(A1)); // Output: 1
console.log(isPalindrome(A2)); // Output: 0
