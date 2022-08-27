// DOM elements
const calcContainer = document.getElementById('calc-container');

const previousInputDisplay = document.getElementById('previous-input');
const currentInputDisplay = document.getElementById('current-input');

const historyDisplay = document.createElement('div');
historyDisplay.setAttribute('id', 'history-display');
const historyList = document.createElement('div');
let historyItem = document.createElement('div');
historyDisplay.appendChild(historyList);

calcContainer.appendChild(historyDisplay);

const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const historyBtn = document.getElementById('history');
const equals = document.getElementById('equals');

const operationBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');



// Input variables
let currentInputNumber = '';
let previousInputNumber = '';
let activeNumber = '';
let activeCalculationArray = [];
let selectedOperator = '';
let history = [];
let clickedEquals = false;
let tempNumber = 0;



// Button event listeners
for (const number of numberBtns) {
    number.addEventListener('click', function () {
        if ((this.textContent === '0') && (currentInputNumber === '0')) {
            return;
        } else if ((currentInputNumber.includes('.')) && (this.textContent === '.')) {
            return;
        } else {
            updateCurrentInput(this.textContent);
            clickedEquals = false;
        }
    });
}

for (const operation of operationBtns) {
    operation.addEventListener('click', function () {
        selectedOperator = this.textContent;
        if (clickedEquals) {
            currentInputNumber = activeNumber;
        } else if ((activeCalculationArray[1] === '÷') && (currentInputNumber === '0')) {
            calculate(tempNumber, '÷', 0);
        } else {
            activeNumber = parseFloat(currentInputNumber);
        }
        clickedEquals = false;
        console.log(activeNumber);
        if (isNaN(activeNumber) || typeof (activeNumber) === 'string') {
            previousInputDisplay.textContent = 'Enter some valid input, or click the \'AC\' button to start over! You can click the HIS button to view history and pick up where you left off.';
            return;
        } else {
            activeCalculationArray.push(activeNumber, this.textContent);
            updatePreviousInput(this.textContent);
            console.log(activeCalculationArray);
            if (activeCalculationArray.length > 3) {
                calculate(activeCalculationArray[0], activeCalculationArray[1], activeCalculationArray[2]);
                currentInputNumber = activeNumber;
                if (currentInputNumber.toString().length > 16) {
                    currentInputDisplay.textContent = parseFloat(currentInputNumber).toPrecision(5);
                } else {
                    currentInputDisplay.textContent = currentInputNumber;
                }
                clearPreviousInput();
                updatePreviousInput(this.textContent);
            }
        }
    });
}

equals.addEventListener('click', function () {
    clickedEquals = true;
    console.log(activeCalculationArray);
    console.log(typeof (activeNumber));
    if (isNaN(activeNumber) || activeNumber === '') {
        previousInputDisplay.textContent = 'Enter some valid input, or click the \'AC\' button to start over! You can click the HIS button to view history and pick up where you left off.'
        return;
    } else {
        previousInputDisplay.textContent = `${activeNumber} ${selectedOperator} ${parseFloat(currentInputNumber)} = `;
        calculate(activeNumber, selectedOperator, parseFloat(currentInputNumber));
        console.log(`resultNumber after clicking '=' is: ${activeNumber}`);
        console.log('activeCalculationArray after clicking = is:');
        console.log(activeCalculationArray);
        console.log(`activeNumber.length = ${activeNumber.length}`);
        if (activeNumber.toString().length > 16) {
            currentInputDisplay.textContent = parseFloat(activeNumber).toPrecision(5);
        } else {
            currentInputDisplay.textContent = activeNumber;
        }
        currentInputNumber = '';
        previousInputNumber = '';
        activeCalculationArray = [];
    }
    console.log(`activeNumber = ${activeNumber}`);
    console.table(history);
});

allClearBtn.addEventListener('click', function () {
    currentInputNumber = '';
    currentInputDisplay.textContent = 0;
    previousInputNumber = '';
    previousInputDisplay.textContent = '🤓 Waiting for some numbers to crunch';
    activeNumber = '';
    activeCalculationArray = [];
    selectedOperator = '';
    console.log('All clear!');
});

deleteBtn.addEventListener('click', function () {
    console.log(this.textContent);
});

historyBtn.addEventListener('click', function () {
    console.log(this.textContent);
    for (let i = 0; i < (history.length); i++) {
        historyItem.appendChild(document.createTextNode(history[i]));
        historyList.appendChild(historyItem);
    }
});



// Calculation function
function calculate(firstNumber, selectedOperator, secondNumber) {
    switch (selectedOperator) {
        case '+':
            activeNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`);
            history.push((`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`));
            break;
        case '-':
            activeNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`);
            history.push((`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`));
            break;
        case 'x':
            activeNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
            console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`);
            history.push((`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`));
            break;
        case '÷':
            if (parseFloat(secondNumber) === 0) {
                previousInputDisplay.textContent = 'Woah! You can\'t divide by zero! 😓 Select a different operation, or click the \'AC\' button to start over. You can also click the HIS button to view history and continue where you left off.';
                currentInputDisplay.textContent = '😓';
                history.push((`${firstNumber} ${selectedOperator} ${secondNumber} = 😓`));
            } else {
                activeNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`);
                history.push((`${firstNumber} ${selectedOperator} ${secondNumber} = ${activeNumber}`));
                break;
            }
    }

    activeCalculationArray.splice(0, 3, activeNumber);
    console.log(activeCalculationArray);
}



// Display functions
function updateCurrentInput(number) {
    if (currentInputNumber.length < 16) {
        currentInputNumber += number;
    }

    if (currentInputNumber.length > 16) {
        currentInputDisplay.textContent = parseFloat(currentInputNumber).toPrecision(5);
    } else {
        currentInputDisplay.textContent = currentInputNumber;
    }

    if ((currentInputNumber[0] === '0') && (currentInputNumber[1] !== '0')) {
        let currentNumSubstring = currentInputNumber.substring(1);
        currentInputNumber = currentNumSubstring;
        if (currentInputNumber.length < 1) {
            currentInputNumber = '0';
            tempNumber = activeNumber;
        }
    }
}

function updatePreviousInput(operation) {
    previousInputNumber += (currentInputNumber += ` ${operation} `);
    if (previousInputNumber.length > 10) {
        previousInputDisplay.textContent = parseFloat(previousInputNumber).toPrecision(5);
    } else {
        previousInputDisplay.textContent = previousInputNumber;
    }
    
    currentInputNumber = '';
}

function clearPreviousInput() {
    previousInputNumber = '';
}

function addToHistory(calculation) {
    historyList.appendChild(historyItem);
}




// tests
// let testString = "10 + 20";
// let testArray = testString.split(" + ");
// console.log(add(testArray));
// console.log(divide(testArray));
// console.log(subtract(testArray));
// console.log(multiply(testArray));

// let anotherString = '';

// let testString = 'this is just a random string. I will not apologize. you do not know. yes?';
// console.log(testString[testString.length - 1]);
// if (testString.includes('.')) {
//     console.log('there\'s at least one in there, bro.');
// }
