/* Q2. Even Subarrays


Problem Description
You are given an integer array A.

Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

Return "YES" if it is possible; otherwise, return "NO" (without quotes).



Problem Constraints
1 <= |A|, A[i] <= 10^6



Input Format
The first and the only input argument is an integer array, A.



Output Format
Return a string "YES" or "NO" denoting the answer.



Example Input
Input 1:

 A = [2, 4, 8, 6]
Input 2:

 A = [2, 4, 8, 7, 6]


Example Output
Output 1:

 "YES"
Output 2:

 "NO"


Example Explanation
Explanation 1:

 We can divide A into [2, 4] and [8, 6].
Explanation 2:

 There is no way to divide the array into even length subarrays. */


 
function isEvenSubarraysPossible(arr) {
    if (arr.length === 0) {
        return "NO"; // If the array is empty, it's not possible to have even subarrays
    }
    
    // Check if the first and last elements of the array are even
    if (arr[0] % 2 === 0 && arr[arr.length - 1] % 2 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}

let A1 = [2, 4, 8, 6];
console.log(isEvenSubarraysPossible(A1)); 

let A2 = [2, 4, 8, 7, 5];
console.log(isEvenSubarraysPossible(A2)); 
