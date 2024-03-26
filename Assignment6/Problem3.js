function leader(arr) {
    let n = arr.length;
    var max = arr[n - 1];
    var count = 1;
    var leaders = [max]; // Initialize leaders array with the last element of the input array

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            count++;
            leaders.unshift(arr[i]); // Add the current element to the beginning of the leaders array
        }
    }

    return leaders;
}

let arr = [16, 17, 4, 3, 5, 2];
let arr2=[5,4]
console.log(leader(arr));
console.log(leader(arr2))

