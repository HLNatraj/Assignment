/* Print reverse string

Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.



Problem Constraints
1 <= |s| <= 1000



Input Format
First line of input contains a string S.



Output Format
Print the character of the string S in reverse order.



Example Input
Input 1:

 scaleracademy
Input 2:

 cool


Example Output
Output 1:

 ymedacarelacs
Output 2:

 looc */

 
function printReverse(S) {
    // Base case: if the string is empty, return
    if (S.length === 0) {
        return;
    }


    // Recursively call the function with the substring excluding the last character
    printReverse(S.substring(0, S.length - 1));
}

// Example usage:
const S1 = "scaleracademy";
const S2 = "cool";

printReverse(S1); // Output: ymedacarelacs
console.log(); // Print newline
printReverse(S2); // Output: looc
console.log(); // Print newline
