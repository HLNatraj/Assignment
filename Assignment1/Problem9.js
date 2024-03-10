/* 
9. Implement array reversal. dont use builtin function */


function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed=reversed+arr[i]
        //reversed.push(arr[i]) can also be used
    }
    return reversed;
}

// Test the function
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);

/* const originalArray = [1, 2, 3, 4, 5]; */

/* Output
Original array: [ 1, 2, 3, 4, 5 ]
Reversed array: 54321 */
