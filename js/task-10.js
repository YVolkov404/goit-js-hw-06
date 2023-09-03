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
buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = inputAmountOfBoxes.value;

    for (let i = 1; i <= amount; i += 1) {
        const box = document.createElement('div');

        box.style.width = Number(30) + 'px';
        box.style.height = Number(30) + 'px';

        // for (let i = 0; i <= 1000; i += 10) {
        //     console.log((box.style.width = Number(30 + i) + 'px'));
        //     console.log((box.style.height = Number(30 + i) + 'px'));
        // }

        box.style.backgroundColor = getRandomHexColor();

        boxes.append(box);
    }
}

function destroyBoxes(event) {
    // boxes.remove();
    boxes.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
