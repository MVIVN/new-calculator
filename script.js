// DOM elements
const previousInputDisplay = document.getElementById('previous-input');
const currentInputDisplay = document.getElementById('current-input');

const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const historyBtn = document.getElementById('history');
const equals = document.getElementById('equals');

const operationBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');



// Input variables
let currentInputNumber = '';
let previousInputNumber = '';
let resultNumber = 0;
let activeCalculationArray = [];
let selectedOperator = '';



// Button event listeners
for (const number of numberBtns) {
    number.addEventListener('click', function () {
        updateCurrentInput(this.textContent);
    });
}

for (const operation of operationBtns) {
    operation.addEventListener('click', function () {
        selectedOperator = this.textContent;
        resultNumber = parseFloat(currentInputNumber);
        activeCalculationArray.push(currentInputNumber, this.textContent);
        updatePreviousInput(this.textContent);
        console.log(activeCalculationArray);
        if (activeCalculationArray.length > 3) {
            calculate(activeCalculationArray[0], activeCalculationArray[1], activeCalculationArray[2]);
            currentInputNumber = resultNumber;
            updateCurrentInput(currentInputNumber);
            clearPreviousInput();
            updatePreviousInput(this.textContent);
        }
    });
}

equals.addEventListener('click', function () {
    console.log(activeCalculationArray);
    previousInputDisplay.textContent = `${resultNumber} ${selectedOperator} ${parseFloat(currentInputNumber)} = `;
    calculate(resultNumber, selectedOperator, parseFloat(currentInputNumber));
    console.log(`resultNumber after clicking '=' is: ${resultNumber}`);
    currentInputDisplay.textContent = resultNumber;
    currentInputNumber = '';
    previousInputNumber = '';
});

allClearBtn.addEventListener('click', function () {
    console.log(this.textContent);
});

deleteBtn.addEventListener('click', function () {
    console.log(this.textContent);
});

historyBtn.addEventListener('click', function () {
    console.log(this.textContent);
});



// Operational functions

// const add = function (array) {
//     return array.reduce((total, current) => parseFloat(total) + parseFloat(current));
// };

// const subtract = function (array) {
//     return array.reduce((total, current) => parseFloat(total) - parseFloat(current));
// };

// const multiply = function (array) {
//     return array.reduce((total, current) => parseFloat(total) * parseFloat(current));
// };

// const divide = function (array) {
//     return array.reduce((total, current) => parseFloat(total) / parseFloat(current))
// };



// Calculation function
function calculate(firstNumber, selectedOperator, secondNumber) {
    switch (selectedOperator) {
        case '+':
            resultNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${resultNumber}`);
            break;
        case '-':
            resultNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${resultNumber}`);
            break;
        case 'x':
            resultNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${resultNumber}`);
            break;
        case '÷':
            resultNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${resultNumber}`);
            break;
    }

    activeCalculationArray.splice(0, 3, resultNumber);
    console.log(activeCalculationArray);
}



// Perform selected calculation
// function performCalculation(operator) {
//     switch (operator) {
//         case '+':
//             console.log(`reduce result (add): ${add(activeCalculationArray)}`);
//             resultNumber = add(activeCalculationArray);
//             activeCalculationArray = [resultNumber];
//             break;
//         case '-':
//             console.log(`reduce result (subtract): ${subtract(activeCalculationArray)}`);
//             resultNumber = subtract(activeCalculationArray);
//             activeCalculationArray = [resultNumber];
//             break;
//         case 'x':
//             console.log(`reduce result (multiply): ${multiply(activeCalculationArray)}`);
//             resultNumber = multiply(activeCalculationArray);
//             activeCalculationArray = [resultNumber];
//             break;
//         case '÷':
//             console.log(`reduce result (divide): ${divide(activeCalculationArray)}`);
//             resultNumber = divide(activeCalculationArray);
//             activeCalculationArray = [resultNumber];
//             break;
//     }
// }



// Display functions
function updateCurrentInput(number) {
    if (currentInputNumber.length < 16) {
        currentInputNumber += number;
    }
    currentInputDisplay.textContent = currentInputNumber;
}

function updatePreviousInput(operation) {
    previousInputNumber += (currentInputNumber += ` ${operation} `);
    previousInputDisplay.textContent = previousInputNumber;
    currentInputNumber = '';
}

function clearPreviousInput() {
    previousInputNumber = '';
}






// tests
// let testString = "10 + 20";
// let testArray = testString.split(" + ");
// console.log(add(testArray));
// console.log(divide(testArray));
// console.log(subtract(testArray));
// console.log(multiply(testArray));

// let anotherString = '';
