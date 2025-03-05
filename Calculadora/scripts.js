const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.button'));

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Erro';
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});