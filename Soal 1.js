function customSort(arr) {
    const letters = arr.filter(item => typeof item === 'string');
    const numbers = arr.filter(item => typeof item === 'number');

    const sortedLetters = letters.sort((a, b) => a.localeCompare(b));
    const sortedNumbers = numbers.sort((a, b) => a - b);

    return [...sortedLetters, ...sortedNumbers];
}

const inputArray = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];
const sortedArray = customSort(inputArray);
console.log(sortedArray);