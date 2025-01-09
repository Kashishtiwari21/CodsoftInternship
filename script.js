
const display = document.querySelector('input');

const buttons = document.querySelectorAll('button');

function updateDisplay(value) {
    if (display.value === "0" && value !== "." && !isNaN(value)) {
        display.value = value;
    } else {
        display.value += value; 
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; 

        if (value === 'AC') {

            display.value = "0";
        } else if (value === 'DEL') {

            display.value = display.value.slice(0, -1) || "0";
        } else if (value === '=') {
            try {

                const expression = display.value.replace('x', '*');
                display.value = parseFloat(eval(expression).toFixed(10)); 
            } catch (error) {
                display.value = "Error"; 
            }
        } else {
            updateDisplay(value);
        }
    });
});


