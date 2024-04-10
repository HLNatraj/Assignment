/* Number of 1 Bits

Problem Description
Write a function that takes an integer and returns the number of 1 bits present in its binary representation.


Problem Constraints
1 <= A <= 109


Input Format
First and only argument contains integer A


Output Format
Return an integer


Example Input
Input 1:
11
Input 2:
6


Example Output
Output 1:
3
Output 2:
2


Example Explanation
Explaination 1:
11 is represented as 1011 in binary.
Explaination 2:
6 is represented as 110 in binary. */


function countSetBits(number) {
    let count = 0;
    while (number > 0) {
        count += number & 1;
        number >>= 1; // right shift A by 1 bit
    }
    return count;
}

const num1 = 11;
const num2 = 6;

console.log(countSetBits(num1)); // Output: 3
console.log(countSetBits(num2)); // Output: 2