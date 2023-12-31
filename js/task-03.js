/**
 *  todo :: напиши скрипт для створення галереї зображень на підставі масиву даних >>>
 *  !       --^ HTML містить список ul.gallery
 *  ?   --> використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>
 *  ?   --> для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML()
 *  !       --> усі елементи галереї повинні додаватися в DOM за одну операцію додавання
 *  !       --> додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи
 */

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryList = document.querySelector('ul.gallery');

const createGalleryListMarkup = images.map(image => {
    return `<li><img src = '${image.url}' alt = '${image.alt}' /></li>`;
});

galleryList.insertAdjacentHTML('afterbegin', createGalleryListMarkup.join(''));
