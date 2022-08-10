/*
//прежние методы получения элементов
const box = document.getElementById('box');

console.log(box);

// const btns = document.getElementsByTagName('button');
// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');
console.log(btns[0]);
// console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// современные методы

const hearts = document.querySelectorAll('.heart'); // появляется метод for Each
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div'); // позволяет получить только один элемент со страницы 
// - тот который попался первым
console.log(oneHeart);
*/

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


//console.dir(box); // показывает свойства объекта или прочего типа

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); //старый метод
//document.body.append(div); // мы берет тег боди и во внуть В КОНЕЦ его добавляем наш Див


// ---------------------------------
// Современные методы

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); // Устаревшие методы

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); // Устаревшие методы

// circles[0].remove();
// wrapper.removeChild(hearts[1]); // Устаревшие методы

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // Устаревшие методы

div.innerHTML = "<h1>Hello world</h1>"; //1 metod // если хотим получить ХТМЛ
// div.textContent = 'Help'; // если мы хотим получить только текст от пользователя

// div.insertAdjacentHTML('beforebegin', '<h2>Privet</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Privet</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Privet</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Privet</h2>');
