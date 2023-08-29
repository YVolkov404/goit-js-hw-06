/**
 * todo :: напиши скрипт, який для кожного елемента масиву ingredients >>>
 *  ?        --> створить окремий елемент <li> >>>
 *  !            --^ обов'язково використовуй метод document.createElement()
 *  ?        --> додасть назву інгредієнта як його текстовий вміст
 *  ?        --> додасть елементу клас item
 *  ?        --> після чого, вставить усі <li> за одну операцію у список ul#ingredients
 */

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const body = document.querySelector('body');
const ingredientsList = document.querySelector('ul#ingredients');

const ingredientsListMarkup = ingredients.map(listItem => {
    const ingredientsItemList = document.createElement('li');
    ingredientsItemList.classList.add('item');
    ingredientsItemList.textContent = listItem;
    return ingredientsItemList;
});

ingredientsList.append(...ingredientsListMarkup);
