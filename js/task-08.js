/**
 *  todo :: напиши скрипт управління формою логіна  >>>
 *  !___ обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit
 *  !___ під час відправлення форми сторінка не повинна перезавантажуватися
 *  ?    --> якщо у формі є незаповнені поля виводь alert з попередженням про те >>>
 *  !        --^ що всі поля повинні бути заповнені
 *  ?    --> якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт >>>
 *  !        --^ де ім'я поля буде ім'ям властивості
 *  !        --^ де значення поля буде значенням властивості
 *  !___ для доступу до елементів форми використовуй властивість elements
 *  !___ виведи об'єкт із введеними даними в консоль і очисть значення полів форми методом reset
 */

const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;

    if (email === '' || password === '') {
        alert('Fill in the form fields, please!');
    } else {
        const formData = {
            email,
            password,
        };
        console.log(formData);
    }

    loginForm.reset();
}
