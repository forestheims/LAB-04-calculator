// import functions
import { addFunction, subtractFunction, multiplyFunction, divideFunction } from './calculator.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// set event listeners 
    // get user input(s)
addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    const sum = addFunction(num1, num2);
    addAnswer.textContent = sum;
});
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

    // Subtract
const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

subtractButton.addEventListener('click', () => {
    const num1 = Number(subtractNumber1.value);
    const num2 = Number(subtractNumber2.value);
    const difference = subtractFunction(num1, num2);
    subtractAnswer.textContent = difference;
});

// Multiply
const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyNumber1.value);
    const num2 = Number(multiplyNumber2.value);
    const product = multiplyFunction(num1, num2);
    multiplyAnswer.textContent = product;
});

// Divide
const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', () => {
    const num1 = Number(divideNumber1.value);
    const num2 = Number(divideNumber2.value);
    const quotient = divideFunction(num1, num2);
    divideAnswer.textContent = quotient;
});