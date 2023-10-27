let Value = 0;

function increaseCounter() {
    Value++;
    updateCounterDisplay();
}

function decreaseCounter() {
    Value--;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = Value;

    if (Value > 0) {
        counterElement.style.color = "white";
    } else if (Value < 0) {
        counterElement.style.color = "red";
    } else { 
        counterElement.style.color = "yellow";
    }
}
updateCounterDisplay();




