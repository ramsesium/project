"use strict"
// alert("Hande hoch");

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Enter your name", "");
// answers[1] = prompt("Enter your last name", "");
// answers[2] = prompt("Enter your age", "");
// document.write(answers);
// console.log(answers);

// // console.log(typeof(answers));
// const category = 'toys';
// // console.log('https://someurl.com/' + category + '/' + '4');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Pavel";
// alert(`Hello, ${user}`);

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(9%6);

// console.log(2 + 2 * 2 != 8);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || !isClose);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (num < 50) {
//     console.log('min');
// } else if (num > 100) {
//     console.log('max');
// } else {
//     console.log('Good');
// };

// (num === 50) ? console.log('Good') : console.log('error'); // ternarniy operator

const num = 44;

switch (num) { // свитч нужен ТОЛЬКО для точного сравнения
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 50:
        console.log('ok');
        break;
    case 110:
        console.log('no');
        break;
    default:
        console.log('not today');
        break;
};