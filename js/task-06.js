/**
 * todo :: напиши скрипт, який під час втрати фокусу на інпуті [подія blur] >>>
 *  !            --^ перевіряє його вміст щодо правильної кількості введених символів
 *  ?        --> яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length
 *  ?        --> якщо введена правильна кількість символів >>>
 *  !            --^ то border інпуту стає зеленим, якщо неправильна кількість - червоним
 */

const formInput = document.querySelector('input');
const formInputBorderStyles = document.querySelector('style');

formInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const formInputLength = event.currentTarget.value.length;
    if (formInputLength === 6) {
        formInput.classList.add('valid');
        formInput.classList.replace('invalid', 'valid');
    } else if (formInputLength !== 6) {
        formInput.classList.add('invalid');
        formInput.classList.replace('valid', 'invalid');
    }
}
