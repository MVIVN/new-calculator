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



// Button event listeners
for (const number of numberBtns) {
    number.addEventListener('click', function() {
        updateCurrentInput(this.textContent);
    });
}

for (const operation of operationBtns) {
    operation.addEventListener('click', function() {
        anotherString += ` ${this.textContent} `;
        console.log(anotherString);
    });
}

equals.addEventListener('click', function() {
    console.log(this.textContent);
});

allClearBtn.addEventListener('click', function() {
    console.log(this.textContent);
});

deleteBtn.addEventListener('click', function() {
    console.log(this.textContent);
});

historyBtn.addEventListener('click', function() {
    console.log(this.textContent);
});



// Operational functions
const add = function (array) {
    return array.reduce((total, current) => parseFloat(total) + parseFloat(current));
};

const subtract = function (array) {
    return array.reduce((total, current) => parseFloat(total) - parseFloat(current));
};
  
const multiply = function (array) {
    return array.reduce((total, current) => parseFloat(total) * parseFloat(current));
};

const divide = function (array) {
    return array.reduce((total, current) => parseFloat(total) / parseFloat(current))
};



// Display functions
function updateCurrentInput(number) {
    if (currentInputNumber.length < 16) {
        currentInputNumber += number;
    }
    currentInputDisplay.textContent = currentInputNumber;
}






// tests
let testString = "10 + 20";
let testArray = testString.split(" + ");
console.log(add(testArray));
console.log(divide(testArray));
console.log(subtract(testArray));
console.log(multiply(testArray));

let anotherString = '';
