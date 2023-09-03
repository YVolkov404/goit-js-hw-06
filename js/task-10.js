/**
 *  todo :: напиши скрипт створення і очищення колекції елементів
 *  !___ створити функцію createBoxes(amount), яка приймає один параметр - число
 *  ?   --> функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes >>>
 *  !        --^ розміри найпершого <div> - 30px на 30px
 *  !        --^ кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px
 *  !        --^ всі елементи повинні мати випадковий колір фону у форматі HEX
 *  !___ створи функцію destroyBoxes(), яка очищає вміст div#boxes, видаляючи всі створені елементи
 *  ?   --> для генерування випадкового кольору використати функцію getRandomHexColor
 */

const inputAmountOfBoxes = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

boxes.style.marginTop = Number(30) + 'px';

// inputAmountOfBoxes.addEventListener('click', createBoxes);
buttonCreate.addEventListener('click', onCreateButtonClick);
buttonDestroy.addEventListener('click', ondestroyButtonClick);

function onCreateButtonClick(event) {
    const inputValue = inputAmountOfBoxes.value;

    createBoxes(inputValue);
}

function ondestroyButtonClick(event) {
    destroyBoxes();
}

function createBoxes(amount) {
    let boxSizes = 30;
    const boxArray = [];
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');

        box.style.width = `${boxSizes}px`;
        box.style.height = `${boxSizes}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxArray.push(box);

        boxSizes += 10;
    }
    boxes.append(...boxArray);
}

function destroyBoxes() {
    // boxes.remove();
    boxes.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
