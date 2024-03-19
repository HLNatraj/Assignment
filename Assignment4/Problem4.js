/* Product array puzzle

Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50] */



function productArrPuzzle(arr){
    let n=arr.length;
    let leftProducts=[];
    let rightProducts=[];
    let productArray=new Array(n);

// Calculate the products of all elements to the left of the current element

    for(let i=0;i<n;i++){
         leftProducts[0]=1;
        leftProducts[i]=leftProducts[i-1]*arr[i-1];
     }

 // Calculate the products of all elements to right of the current element

    for(let i=n-2;i>=0;i--){
        rightProducts[n-1]=1;
        rightProducts[i]=rightProducts[i+1]*arr[i+1];
    }

// Multiply the left and right products to get the final product array

    for(let i=0;i<n;i++){
        productArray[i]=leftProducts[i]*rightProducts[i];
    }
return productArray;


}

let arr=[1,2,3,4,5];
console.log(productArrPuzzle(arr));