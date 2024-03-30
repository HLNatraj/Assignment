/* How do you get the matching elements(repeated array value) in an integer array? Also,
 find the frequency of the repeated element? */

 function findRepeatedElements(arr) {
    const frequencyMap = {};
    
    // Count the occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Filter out elements with frequency greater than 1
    const repeatedElements = {};
    for (let num in frequencyMap) {
        if (frequencyMap[num] > 1) {
            repeatedElements[num] = frequencyMap[num];
        }
    }

    return repeatedElements;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 2, 3, 4, 2, 4];
const repeatedElements = findRepeatedElements(arr);
console.log("Repeated Elements and their Frequencies:");
console.log(repeatedElements);

