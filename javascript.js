//basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "dumbass" : a / b;
}

function operate(a, b, operation) {
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
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

function displayNumber(button) {
    display.textContent = display.textContent + button.textContent;
}

function clearDisplay() {
    display.textContent = "";
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
        
    }


    switch (className) {
        case "optionButton" {
            
        }
    }
}

const display = document.querySelector("#display p");
let firtsNumber;

buttonsContainer.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName === "DIV") stopImediatePropagation();
    updateDisplay(target);
})


