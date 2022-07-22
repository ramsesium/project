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

// LESSON 12--------------------------------------

1) Создать переменную numberOfFilms и в неё поместить
ответ от пользователя на вопрос:
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

// LESSON 13----------------------------------------------

// if (num < 50) {
//     console.log('min');
// } else if (num > 100) {
//     console.log('max');
// } else {
//     console.log('Good');
// };

// (num === 50) ? console.log('Good') : console.log('error'); ternarniy operator

// const num = 44;

// switch (num) { // свитч нужен ТОЛЬКО для точного сравнения
//     case 49:
//         console.log('no');
//         break;
//     case 100:
//         console.log('no');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     case 110:
//         console.log('no');
//         break;
//     default:
//         console.log('not today');
//         break;
// };

// LESSON 14------------------------------------------

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// };


// -----------

// do { // сначала проверяем а потом делаем что-то
//     console.log(num);
//     num++;
// }

// while (num < 55);
// ------------


// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// };

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i); 
// };


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue; // позволяет пропустить шаг который нам не нужен ,
// но при этом не прерывает полностью цикл
//     }

//     console.log(i); 
// };

// LESSON 15------------------------------------------------------

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10
 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - 
"Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// 1 way
// for ( let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
// 
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--; // если условие не выполнилось мы 
//возвращаемся на 1 итерацию назад и еще раз задаем вопросы пользователю
//     }
// }
// 
// 
// 2 way
// let num = 1;
// 
// while (num <= 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     num++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         num--;
//     };
// }
// 
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// 
// // 3 way
// let num = 0;
// do { 
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     num++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         num--;
//     };
// }
// 
// while (num < 2);
// 
// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// console.log("Вы киноман");
// } else {
//     console.log("Error");
// }
// 
// console.log(personalMovieDB);

// LESSON 16----------------------------------------------------
// ____________________________________________________________
// ! Function declaration создается до начала выполнения скриптаб можно
// вызвать перед обьявлением
// ! Function expression создается только тогда когда доходит поток кода
// можно вызвать только после обьявления 
// ! Function Arrow - не имеет своего конткста
// _____________________________________________________________
// let num = 20; // глобальная переменная

// function showFirstMessage(text) { // начинается обычно с 
// глагола - показать - первое сообщение
//     console.log(text);
//     let num = 10; // локальная переменная
//     console.log(num)
// }
// // замыкание функции - это сама функция с всеми переменными, 
// которые ей доступны 
// showFirstMessage('Hello world');
// console.log(num);

// let num = 20; // глобальная переменная

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num; // возвращает значение NUM во внешний мир - 50
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => { return a + b; }; // если функция содержит один аргумент
// или функция в одну строчку, то скобки можно
// опускать const calc = (a, b) => a + b ;

// LESSON 17----------------------------------------------