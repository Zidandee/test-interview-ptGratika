function countAndSort(inputString) {
    let letterCount = {};

    for (let char of inputString) {
        if (/[a-zA-Z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    const sortedLetters = Object.keys(letterCount).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

    const sortedLetterCount = {};
    for (let char of sortedLetters) {
        sortedLetterCount[char] = letterCount[char];
    }

    return sortedLetterCount;
}

const inputStr1 = "Hello World";
const output1 = countAndSort(inputStr1);
console.log(output1);

const inputStr2 = "Bismillah";
const output2 = countAndSort(inputStr2);
console.log(output2);

const inputStr3 = "MasyaAllah";
const output3 = countAndSort(inputStr3);
console.log(output3);
