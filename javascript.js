//basic math functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b == 0 ? "dumbass" : a / b;
}

function operate(a, b, operation) {
    if (a === "dumbass") return a;

    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "X":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

//dinamically calculate the width of elements
function defineWidthOfDoubleButtons() {
    let buttonWidth = parseInt(getComputedStyle(numberButton).width);
    let gap = parseInt(getComputedStyle(buttonsContainer).gap);

    let size = buttonWidth * 2 + gap;

    doubleButtons.forEach(button => button.style.width = `${size}px`);
}

function defineWidthOfCalculator() {
    let buttonWidth = parseInt(getComputedStyle(numberButton).width);
    let gap = parseInt(getComputedStyle(buttonsContainer).gap);

    let size = buttonWidth * 4 + gap * 3;

    buttonsContainer.style.width = `${size}px`;
}

const doubleButtons = Array.from(document.querySelectorAll(".doubleButton"));
const numberButton = document.querySelector(".numberButton");
const buttonsContainer = document.querySelector("#buttons");

defineWidthOfDoubleButtons();
defineWidthOfCalculator();

function displayNumber(digitedNumber) {
    if (isNewNumber) {
        isNewNumber = false;
        display.textContent = "";
    }

    if (display.textContent.length < MAX_CHARACTERS_DISPLAY) {
        display.textContent += digitedNumber;
    }
}

function doOperation(button) {
    if (operator === null || isNewNumber === true) {
        if (button.textContent !== "=") operator = button.textContent;
        firstNumber = display.textContent;
        isNewNumber = true;
        return;
    }

    firstNumber = operate(firstNumber, display.textContent, operator);

    button.textContent === "=" ? operator = null : operator = button.textContent;

    let roundedFirstNumber = roundNumberToFitDisplay(firstNumber);

    isNewNumber = true;
    displayNumber(roundedFirstNumber);
    isNewNumber = true;
}

function clearDisplay() {
    display.textContent = "";
    firstNumber = 0;
    operator = null;
    isNewNumber = true;
}

function getFirstClass(classes) {
    let classesArray = classes.split(" ");
    return classesArray.length === 1 ? classes : classesArray[0];
}

function changeNumberSign() {
    display.textContent[0] === "-"
        ? display.textContent = display.textContent.slice(1)
        : display.textContent = "-" + display.textContent
}

function updateDisplay(button) {
    let buttonClass = getFirstClass(button.className);
    let textContent = button.textContent;

    if (textContent === "C") {
        clearDisplay();
        return;
    } else if (textContent === "+/-") {
        changeNumberSign();
        return;
    }

    buttonClass === "numberButton" ? displayNumber(button.textContent) : doOperation(button);
}

function toggleSelectedButton (button) {
    button.classList.toggle("selectedButton");
}

function roundNumberToFitDisplay(number) {
    if (Number.isInteger(number)) return number;

    const integralNumber = Math.trunc(Math.abs(number));
    const integralLength = (integralNumber.toString().length) + 1;      //"+1" because of the "."
    const roundedNumber = parseFloat(number.toFixed(MAX_CHARACTERS_DISPLAY - integralLength));
    return roundedNumber;
}

const display = document.querySelector("#display p");
let firstNumber = 0;
let operator = null;
let isNewNumber = true;
const MAX_CHARACTERS_DISPLAY = 9;       //it is actually 10, but you need space for the "-" in negative numbers

buttonsContainer.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName === "DIV") stopImediatePropagation();
    updateDisplay(target);
});