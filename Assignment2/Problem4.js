//Declare an array and print all values in an array using loops - for, while — Use functions

// Declare an array
var myArray = [1, 2, 3, 4, 5];

// Function to print array values using a for loop
function printArrayForLoop(arr) {
    console.log("Printing array using for loop:");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to print array values using a while loop
function printArrayWhileLoop(arr) {
    console.log("Printing array using while loop:");
    var i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

// Call the functions to print array values
printArrayForLoop(myArray);
console.log(); // Add a line break for readability
printArrayWhileLoop(myArray);


/* Input 
var myArray = [1, 2, 3, 4, 5]; */

/* Output
 Printing array using for loop:
1
2
3
4
5

Printing array using while loop:
1
2
3
4
5 */