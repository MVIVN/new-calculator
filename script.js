// DOM elements

const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const historyBtn = document.getElementById('history');
const equals = document.getElementById('equals');

const operations = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');




// Button event listeners
for (const number of numbers) {
    number.addEventListener('click', function() {
        console.log(this.textContent);
    });
}

for (const operation of operations) {
    operation.addEventListener('click', function() {
        console.log(this.textContent);
    });
}

equals.addEventListener('click', function() {
    console.log(this.textContent);
})

allClearBtn.addEventListener('click', function() {
    console.log(this.textContent);
});

deleteBtn.addEventListener('click', function() {
    console.log(this.textContent);
});

historyBtn.addEventListener('click', function() {
    console.log(this.textContent);
});