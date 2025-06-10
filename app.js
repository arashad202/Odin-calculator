const myScreen = document.querySelector('input');
const myNumbers = document.querySelectorAll('.num');
const myOperators = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const myResult = document.querySelector('.result');
const myDelete = document.querySelector('.delete');

let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let isSecond = false;

// Number button logic
myNumbers.forEach(num => {
    num.addEventListener('click', () => {
        if (!isSecond) {
            firstOperand += num.textContent;
            myScreen.value = firstOperand;
        } else {
            secondOperand += num.textContent;
            myScreen.value = secondOperand;
        }
    });
});

// Operator button logic
myOperators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (firstOperand !== '') {
            currentOperator = operator.textContent;
            isSecond = true;
        }
    });
});

// Result (=) button logic
myResult.addEventListener('click', () => {
    if (firstOperand && secondOperand && currentOperator) {
        const result = operate(Number(firstOperand), Number(secondOperand), currentOperator);
        myScreen.value = result;
        // Reset state for chaining operations
        firstOperand = result.toString();
        secondOperand = '';
        currentOperator = '';
        isSecond = false;
    }
});

// Reset (AC) button logic
reset.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    isSecond = false;
    myScreen.value = '';
});

// Delete (DEL) button logic
myDelete.addEventListener('click', () => {
    if (!isSecond) {
        firstOperand = firstOperand.slice(0, -1);
        myScreen.value = firstOperand;
    } else {
        secondOperand = secondOperand.slice(0, -1);
        myScreen.value = secondOperand;
    }
});

// Operation logic
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error';

const operate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 0;
    }
};
