/**
 *  todo :: напиши скрипт, який під час набору тексту в інпуті input#name-input [подія input] >>>
 *  !       --^ підставляє його поточне значення в span#name-output
 *  ?   --> якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"
 */

const formInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

formInput.addEventListener('input', event => {
    const formInputValue = event.currentTarget.value;
    textOutput.textContent = formInputValue;
    if (formInputValue === '') {
        textOutput.textContent = 'Anonymous';
    }
});
