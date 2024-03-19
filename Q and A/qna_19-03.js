/* Subarray Product Less Than K
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of 
all the elements in the subarray is strictly less than k.
Example 1:
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k. */

/* let number=[10,5,2,6];
let k=100;
let result=countsubarray(number,k);
console.log("number of sub arrays with product less than k",k,":",result);

function countsubarray(nums,k){
    if(!nums.length)
    return 0;

    let count=0;
    let product=1;
    let left=0;

    for(let right=0;right<nums.length;right++)
    {
        product*=nums[right];
        while(product>=k)
        {
        product/=nums[left];
        left++;
    }
    count+=right-left+1;
    }
    return count;
} */

function countsubarray(nums,k)
{
    if(!nums.length)
    return 0;

    let count=0;
    for(let start=0;start<nums.length;start++)
    {
        let product =1;
        for(let end=start;end<nums.length;end++){
            product*=nums[end];
            if(product<k)
            {
                count++;
            }
            else{
                break;
            }
        }
    }
        return count;
    }
    let number=[10,5,2,6];
    let k=100;
    let result=countsubarray(number,k);
    console.log("number of sub arrays with product less than k",k,":",result);