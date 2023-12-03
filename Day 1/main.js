const fs = require('node:fs');

let input = fs.readFileSync('Day 1/input.txt', 'utf-8');
let splitInput = input.split('\n'); 
let finalNum = 0;

for (let i = 0; i < splitInput.length; i++) {   
    let elementToStr = splitInput[i].toString().replace(/\D/g, ''); 
    let start = elementToStr.slice(0, 1);
    let end = elementToStr.slice(-1); 
    splitInput[i] = start + end;
}

for (let i = 0; i < splitInput.length - 1; i++) {
    let element = splitInput[i].toString(); 
    element = parseInt(element); 
    finalNum = finalNum + element;
}
console.log(finalNum);