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
const hearts = document.querySelectorAll('heart');
const oneHeart = document.querySelector('.heart');

console.dir(box); // показывает свойства объекта или прочего типа
