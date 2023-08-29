/**
 * todo :: напиши скрипт, який порахує і виведе в консоль >>>
 * ?        --> кількість категорій в ul#categories, тобто елементів li.item
 * !___ для кожного елемента li.item у списку ul#categories, знайде і виведе в консоль >>>
 * ?        --> текст заголовку елемента (тегу <h2>)
 * ?        --> кількість елементів в категорії (усіх <li>, вкладених в нього)
 * !___ для виконання цього завдання потрібно використати >>>
 * ?        --^ метод forEach() і властивості навігації по DOM
 */

const categories = document.querySelector('ul#categories');
const categoriesItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);
console.log('=======================');

const categoriesItemsLists = document.querySelectorAll('.item > ul');

categoriesItemsLists.forEach(list => {
    console.log(`Category: ${list.previousElementSibling.textContent}`);
    console.log(`Elements: ${list.children.length}`);
    console.log('-----------------------');
});
