/**
 *  todo :: напиши скрипт, який реагує на  >>>
 *  !       --^ на зміну значення input#font-size-control [подія input]
 *  !       --^ змінює інлайн-стиль span#text, оновлюючи властивість font-size
 *  ?   --> в результаті, перетягуючи повзунок, буде змінюватися розмір тексту
 */

const formInput = document.querySelector('input');
const text = document.querySelector('span');

formInput.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
    const fontSizeValue = event.currentTarget.value;
    text.style.fontSize = `${fontSizeValue}px`;
}
