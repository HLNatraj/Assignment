/* Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:
Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

constraints:

1 <= N <= 10^5
-10^5 <= A[i] <= 10^5
eg:

Example Input
Input 1:
A = [-7, 1, 5, 2, -4, 3, 0]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:
3
Output 2:

-1 */


/* 
 function equilibrium(array,n)
{
    var i,j;
    var leftsum,rightsum;
  
    for(i=0;i<n;i++)
    {
        leftsum=0;
        for(let j=0;j<i;j++)
        {
        leftsum+=array[j]
        }
    

    rightsum=0;
    for(let j=i+1;j<n;j++)
    {
    rightsum+=array[j];

    if(leftsum==rightsum)
    return i;
    }
    }
return -1;
}

var array=[-7,1,5,2,-4,3,0]
var array1=[1,2,3]
n=array.length;
console.log(equilibrium(array,n))
console.log(equilibrium(array1,n))  */


function equilibriumIndex(arr) {
    let cumArr = [arr[0]];
    
    let equiIndices=[];

    
    for (let i = 1; i < arr.length; i++) {
        cumArr[i] = cumArr[i - 1] + arr[i];
        
    }
    console.log("cummulative Array:"+cumArr)

    for (let i = 1; i < arr.length - 1; i++) { 
        let ls = cumArr[i - 1]; 
        let rs = cumArr[arr.length - 1] - cumArr[i]; 

        if (ls === rs) {
            equiIndices.push(i);
            
        }
       
    }
    if (equiIndices.length === 0) {
        return -1; 
    }

    return equiIndices; 
    
}

let arr1 = [-7, 1, 5, 2, -4, 3, 0];
var arr2=[1,2,3]
console.log(equilibriumIndex(arr1));
console.log(equilibriumIndex(arr2));






