/* Range Sum Query



Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



Problem Constraints
1 <= N, M <= 10^5
1 <= A[i] <= 10^9
0 <= L <= R < N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4] */


function findrange(arr, ranges) {
    // Create cumulative sum array
    let cumSum = [0];
    for (let i = 0; i < arr.length; i++) {
        cumSum[i + 1] = cumSum[i] + arr[i];
        console.log(cumSum); //[ 0, 1, 3, 6, 10, 15 ]
    }

    // Calculate sum for each range
    let result = [];
    for (let i = 0; i < ranges.length; i++) {
        let start = ranges[i][0];
        let end = ranges[i][1];
        result.push(cumSum[end + 1] - cumSum[start]);
    }

    return result;
}

// Test the function
const array = [1,2,3,4,5];
const ranges = [[0, 3], [1,2]];
console.log(findrange(array, ranges)); // Output: [10, 5]