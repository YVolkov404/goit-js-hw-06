/**
 *  todo :: напиши скрипт, який змінює кольори фону елемента <body> >>>
 *  !        --^ по кліку на button.change-color через інлайн-стиль
 *  !        --^ і виводить значення кольору в span.color
 *  !___ для генерування випадкового кольору використовуй функцію getRandomHexColor
 */

const button = document.querySelector('button.change-color');
const backgroundColor = document.querySelector('span');

button.addEventListener('click', onClickChangeColor);

function onClickChangeColor(event) {
    backgroundColor.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
