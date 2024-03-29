/* Special Subsequences "AG"


Problem Description
You have given a string A having Uppercase English letters.

You have to find how many times subsequence "AG" is there in the given string.

NOTE: Return the answer modulo 109 + 7 as the answer can be very large.



Problem Constraints
1 <= length(A) <= 10^5



Input Format
First and only argument is a string A.



Output Format
Return an integer denoting the answer.



Example Input
Input 1:

 A = "ABCGAG"
Input 2:

 A = "GAB"


Example Output
Output 1:

 3
Output 2:

 0


Example Explanation
Explanation 1:

 Subsequence "AG" is 3 times in given string 
Explanation 2:

 There is no subsequence "AG" in the given string. */



/*  function countAGSubsequences(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === 'A' && str[j] === 'G') {
                count = (count + 1);
            }
        }
    }

    return count;
}

console.log(countAGSubsequences("ABCGAG")); // Output: 3
console.log(countAGSubsequences("GAB"));    // Output: 0 */



function countAGSubsequences(str) {
    let count = 0;
    let aCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            aCount++;
        } else if (str[i] === 'G') {
            count += aCount;
        }
    }

    return count;
}

console.log(countAGSubsequences("ABCGAG")); // Output: 3
console.log(countAGSubsequences("GAB"));    // Output: 0
