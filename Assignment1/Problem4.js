/* 4. Find sum of N numbers
eg  1,2,3,4,5....N */


function sumOfNNumbers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum = sum+i;
    }
    return sum;
}

// Example usage:
const N = 5; // Change N to the desired value
const sum = sumOfNNumbers(N);
console.log("The sum of the first", N, "natural numbers is:", sum);

/* const N = 5; */
/*  output::The sum of the first 5 natural numbers is: 15 */
