let count = 0;
const counterDisplay = document.getElementById('counter');

function increaseCounter() {
    count++;
    counterDisplay.textContent = count;
}

function decreaseCounter() {
    count--;
    counterDisplay.textContent = count;
}