
function minionGame(arr) {
    let kevinScore = 0;
    let stuartScore = 0;
    let vowels = ['A', 'E', 'I', 'O', 'U'];

    function isVowel(char) {
        return vowels.includes(char.toUpperCase());
    }

    const n = arr.length;

    for (let l = 0; l < n; l++) {
        for (let r = l; r < n; r++) {
            let subarray = "";
            for (let i = l; i <= r; i++) {
                subarray += arr[i];
            }
            if (isVowel(subarray[0])) {
                kevinScore++;
            } else {
                stuartScore++;
            }
        }
    }

    // Determine the winner
    let winner;
    if (kevinScore > stuartScore) {
        winner = "Kevin";
    } else if (kevinScore < stuartScore) {
        winner = "Stuart";
    } else {
        winner = "Draw";
    }

    return winner + " " + Math.max(kevinScore, stuartScore);
}

let arr = ['B', 'A', 'N', 'A', 'N', 'A'];
console.log(minionGame(arr)); 
