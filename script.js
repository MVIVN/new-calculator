// DOM elements
const previousInput = document.getElementById('previous-input');
const currentInput = document.getElementById('current-input');

const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const historyBtn = document.getElementById('history');
const equals = document.getElementById('equals');

const operations = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');



// Input variables




// Button event listeners
for (const number of numbers) {
    number.addEventListener('click', function() {
        anotherString += this.textContent;
        console.log(anotherString);
    });
}

for (const operation of operations) {
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
}






// tests
let testString = "12345 + 67890";
let testArray = testString.split(" + ");
console.log(add(testArray));
console.log(divide(testArray));
console.log(subtract(testArray));
console.log(multiply(testArray));

let anotherString = '';
