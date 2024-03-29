/* Q2. Closest MinMax


Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array. */

 function closestMinMax(A) {
    const n = A.length;
    let min = Infinity;
    let max = -Infinity;
    let minIndex = -1;
    let maxIndex = -1;

    // Find the minimum and maximum elements in the array
    for (let i = 0; i < n; i++) {
        if (A[i] < min) {
            min = A[i];
            minIndex = i;
        }
        if (A[i] > max) {
            max = A[i];
            maxIndex = i;
        }
    }

    // Calculate the distance between leftmost and rightmost occurrences of min and max
    const distance1 = Math.abs(maxIndex - minIndex) + 1;

    // Find the leftmost occurrence of min and max
    minIndex = A.indexOf(min);
    maxIndex = A.indexOf(max);

    // Find the rightmost occurrence of min and max
    let rightMinIndex = A.lastIndexOf(min);
    let rightMaxIndex = A.lastIndexOf(max);

    // Calculate the distance between leftmost and rightmost occurrences of min and max
    const distance2 = Math.abs(rightMaxIndex - rightMinIndex) + 1;

    // Return the minimum of the two distances
    return Math.min(distance1, distance2);
}

// Test cases
console.log(closestMinMax([1, 3, 2])); // Output: 2
console.log(closestMinMax([2, 6, 1, 6, 9])); // Output: 3

