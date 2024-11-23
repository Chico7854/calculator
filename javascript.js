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