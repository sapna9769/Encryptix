document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    function updateDisplay() {
        if (display.value) {
            display.classList.add('has-value');
        } else {
            display.classList.remove('has-value');
        }
    }

    window.clearDisplay = function() {
        display.value = '';
        updateDisplay();
    };

    window.deleteLast = function() {
        display.value = display.value.toString().slice(0, -1);
        updateDisplay();
    };

    window.appendValue = function(value) {
        display.value += value;
        updateDisplay();
    };

    window.calculateResult = function() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
        updateDisplay();
    };
});
