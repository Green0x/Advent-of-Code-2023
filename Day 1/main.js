const fs = require('node:fs');

let input = fs.readFileSync('Day 1/input.txt', 'utf-8');
let splitInput = input.split('\n'); // Remove all non numeric characters
let finalNum = 0;

for (let i = 0; i < splitInput.length; i++) {   
    let elementToStr = splitInput[i].toString().replace(/\D/g, ''); // Change each element to a string for easy concatenation
    let start = elementToStr.slice(0, 1); // Get first number
    let end = elementToStr.slice(-1); // Get last number
    splitInput[i] = start + end; // Concatenate both numbers and put back into array
}

for (let i = 0; i < splitInput.length - 1; i++) {
    let element = splitInput[i].toString(); // Get element as string
    element = parseInt(element); // Change element to int
    finalNum = finalNum + element // Add each number to the final sum
}
console.log(finalNum)