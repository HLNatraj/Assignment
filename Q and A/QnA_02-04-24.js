/* Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */


/* function majorityElement(arr)
{
    for(let i=0;i<arr.length;i++)
    {
    let count=0;
    for(let j=1;j<arr.length;j++)
    {
    if(arr[i]==arr[j])
    {
    count++;
    }
    }
    if(count>arr.length/2)
    {
        return arr[i];
    }
}
return "no majority ele found";
}

let arr=[3,2,3];
let arr1=[2,2,1,1,1,2,2];
console.log("majority element",+majorityElement(arr));
console.log("majority element",+majorityElement(arr1));
 */

function majorityElement(arr)
{
    let countMap=[];
    let majorityElement=null;
    let maxcount=0;

    for(let num of arr){
        countMap[num]=(countMap[num]||0)+1;
        if(countMap[num]>maxcount){
            maxcount=countMap[num];
            majorityElement=num;
        }
    }
    if(maxcount>arr.length/2)
    {
        return majorityElement;
    }
    else{
        return "no majority ele found";
    }
}
let arr=[3,2,3];
let arr1=[2,2,1,1,1,2,2];
console.log("majority element",+majorityElement(arr));
console.log("majority element",+majorityElement(arr1));
 