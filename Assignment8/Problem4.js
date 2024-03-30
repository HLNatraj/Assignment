//How do you calculate the number of vowels and consonants in a String?

function countVowelsAndConsonants(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    let vowelCount = 0;
    let consonantCount = 0;

    let vowels = 'aeiou';
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
        else
            consonantCount++;
    }
    return { vowels: vowelCount, consonants: consonantCount };
}

// Test case
const str = "Hello World!";
const counts = countVowelsAndConsonants(str);
console.log("Vowels:", counts.vowels);         // Output: 3
console.log("Consonants:", counts.consonants); // Output: 7
