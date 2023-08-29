const formInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

formInput.addEventListener('input', event => {
    const formInputValue = event.currentTarget.value;
    textOutput.textContent = formInputValue;
});
