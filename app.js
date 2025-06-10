let myScreen = document.querySelector('input');
const myNumbers = document.querySelectorAll('.num');
const myOperator = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');
const myResult = document.querySelector('.result');
const myDelete = document.querySelector('delete');
let result = '';

myNumbers.forEach(num => {
    num.addEventListener('click', () => {
        result += num.textContent;
        myScreen.value = result;
    })
})

const add = (a,b) => a + b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


const operate = (num1, num2, operator) => {

    switch (operator) {
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
        default:
            result = 0;
    };

    return result;
}