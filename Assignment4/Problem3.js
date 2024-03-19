/* Time to equality

Problem Description
Given an integer array A of size N. In one second, you can increase the value of one element by 1.

Find the minimum time in seconds to make all elements of the array equal.


Problem Constraints
1 <= N <= 1000000
1 <= A[i] <= 1000


Input Format
First argument is an integer array A.


Output Format
Return an integer denoting the minimum time to make all elements equal.


Example Input
A = [2, 4, 1, 3, 2]


Example Output
8 */


function minTimeToEqualize(array) {
    const max = Math.max(...array);//4
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum = sum + array[i];
    } 
    const n = array.length;
    return max * n - sum; 
}

// Example usage:
const array1 = [2, 4, 1, 3, 2];
const result1 = minTimeToEqualize(array1);
console.log(result1); // Output: 8

const array2 = [1,5,8,6,2];
const result2 = minTimeToEqualize(array2);
console.log(result2); // Output: 18