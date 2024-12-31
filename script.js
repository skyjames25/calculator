const btn = document.querySelectorAll('button');
const input = document.querySelector('.input');
let str = "";
let num1;
let num2;
let operator;
let isOperator = false;


btn.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        let ch = e.target.value;

        if (ch === "AC") {
            input.value = "";
            str = "";
            num1 = null;
            num2 = null;
            operator = null;
            return;
        }
        
        if(!isNaN(ch) || ch === ".") {
            str += ch;
            input.value = str;
        }

        if(ch === "+" || ch === "-" || ch === "*" || ch === "/") {
            if(isOperator) return;

            isOperator = true;
            num1 = parseFloat(str);
            str = "";
            operator = ch;
        } else {
            isOperator = false;
        }

        if(ch === "=") {
            num2 = parseFloat(str);
            let result = operate(operator,num1,num2);
            input.value = result;
            str = result.toString();
        }
        
        
    })
})





function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return (num2 === 0) ? "ERROR": num1/num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}