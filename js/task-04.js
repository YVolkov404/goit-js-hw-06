/**
 *  todo :: лічильник складається зі спану і кнопок >>>
 *  !       --^ які по кліку повинні збільшувати і зменшувати його значення на одиницю
 *  ?   --> створити змінну counterValue, в якій буде зберігатися поточне значення лічильника >>>
 *  !       --^ ініціалізувати змінну counterValue значенням 0
 *  ?   --> додати слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника
 *  ?   --> оновлюй інтерфейс новим значенням змінної counterValue
 */

let counterValue = 0;

//-----------------------------------------------------------------

const spanValue = document.querySelector('span#value');

//-----------------------------------------------------------------

const increaseCounterBtn = document.querySelector('[data-action=increment]');

const decreaseCounterBtn = document.querySelector('[data-action=decrement]');

//---------------------------------------------------------------

increaseCounterBtn.addEventListener('click', handleIncreaseCounterBtnClick);

decreaseCounterBtn.addEventListener('click', handleDecreaseCounterBtnClick);

//---------------------------------------------------------------

function handleIncreaseCounterBtnClick() {
    counterValue += 1;
    spanValue.textContent = counterValue;
}

function handleDecreaseCounterBtnClick() {
    counterValue -= 1;
    spanValue.textContent = counterValue;
}
