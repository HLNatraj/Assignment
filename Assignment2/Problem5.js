//Declare an array and sum of all values in an array using loops - for, while  — Use functions

// Declare an array
var myArray = [1, 2, 3, 4, 5];

// Function to calculate the sum of array values using a for loop
function sumArrayForLoop(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to calculate the sum of array values using a while loop
function sumArrayWhileLoop(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

// Call the functions to calculate the sum of array values
var sumForLoop = sumArrayForLoop(myArray);
var sumWhileLoop = sumArrayWhileLoop(myArray);

// Print the sum calculated using both loops
console.log("Sum of array values using for loop:", sumForLoop);
console.log("Sum of array values using while loop:", sumWhileLoop);


/* Input 
var myArray = [1, 2, 3, 4, 5]; */

/* Output
Sum of array values using for loop: 15
Sum of array values using while loop: 15 */