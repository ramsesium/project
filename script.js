/*jshint globalstrict: true*/
'use strict';

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
//         continue; 
// позволяет пропустить шаг который нам не нужен ,
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
//         i--;
// если условие не выполнилось мы 
// возвращаемся на 1 итерацию назад и еще раз задаем вопросы пользователю
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

// function ret() {
//     let num = 50;
//     return num; // возвращает значение NUM во внешний мир - 50
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => { return a + b; }; если функция содержит один аргумент
// // или функция в одну строчку, то скобки можно
// // опускать const calc = (a, b) => a + b ;

// LESSON 17----------------------------------------------
/*
const str = 'teSt';

// console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

// позволяет найти индекс с которого начинается слово fruit - поиск подстроки
console.log(fruit.indexOf('fruit')); 

const logg = 'Hello world';

// метод позволяет обрезать по определенным индексам
// ( принимает агрументы стар и энд)
console.log(logg.slice(6, 11));

// метод позволяет обрезать по определенным индексам, 
// здесь первый аргумент можно задавать больше чем второй
// и не поддерживает отрицаетельные индексы. 
console.log(logg.substring(6, 11));

// здесь мы указываем с какой позиции и сколько символов нам необходимо вырезать
console.log(logg.substr(6, 1));

const num = 12.2;

//метод округляет до ближайшего целого числа
console.log(Math.round(num));

const test = "12.2px";

//переводит число в другую систему исчесления
console.log(parseInt(test));

//переводит строку или число и возвращет в десятичном виде
console.log(parseFloat(test));
*/

// LESSON 18----------------------------------------------
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat.
 Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь
будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}".
 Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for ( let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    } else {
        console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    // в условии if - действие будет выполняться если в условии значение получается true
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for ( let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);

*/

// LESSON 19----------------------------------------------
/*
function first() {
    setTimeout(function() {
    console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I done this lessen!');
}

learnJS('JavaScript', done);

*/

// LESSON 20----------------------------------------------
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options['colors']['border']);

удалить свойство из объекта
delete options.name;

console.log(options);

// перебирает свойства объекта
for ( let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }    
}

let counter = 0;
for ( let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }    
}
console.log(counter);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// //получаем массив из объекта в ключе верхнего уровня
// console.log(Object.keys(options).length);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // создание своего метода
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

// деструктуризация - вытащили отдельные свойства в качестве отдельной переменной
const {border, bg} = options.colors;
console.log(border);
 
// console.log(Object.keys(options).length);
*/

// LESSON 21----------------------------------------------

// const arr = [1, 32, 3, 16, 8, 10];

// сравнение идет посимвольное и отсортировался как строки
// arr.sort();
// console.log(arr);

// arr.sort(compareName);
// console.log(arr);

// //пока просто запомнить структуру функцию
// function compareName(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// //гибко перебирает элементы массива- можно настраивать, может быть 3 аргумента
// // что перебираем, номер по порядку, и какой массив перебираем
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside of array ${arr}`);
// });

// //pop удаляет последний элемент массива
// arr.pop();

// //push добавляет элемент в конец массива
// arr.push(10);

// //переборка массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// //for of перебор - можно также перебрать элементы строки
// for (let value of arr) {
//     console.log(value);
// }

// //split формируем массив с нужным разделитем ', '
// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products);

// // метод сортировки
// products.sort();

// //join объединение элементов массива ', ' в строку
// console.log(products.join('; '));

// LESSON 22----------------------------------------------
/*
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 10,
//     b: 1
// };

// //передается ссылка на объект
// const copy = obj;

// copy.a = 20;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};


//создаем поверхностную копию (бывает еще глубокая)
const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();// клонирование массива(не по ссылке)

newArray[1] = 'asdasdad';
console.log(newArray);
console.log(oldArray);

//оператор разворота
const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['worldpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];
const newARRAY = [...array];
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj); */

// LESSON 23----------------------------------------------

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));
// console.log(strObj);

//console.dir([1,2,3]);

// команда __proto__ старый метод - сейчас не использыется

/*
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello, man');
    }
};

const jonh = {
    health: 100
};

// jonh.__proto__ = soldier;

Object.setPrototypeOf(jonh, soldier); // современный метод

// console.log(jonh.armor);

jonh.sayHello();
*/

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello, man');
//     }
// };

// //создаем новый объект Джон, который бует прототипно наследоваться от Солдата
// const jonh = Object.create(soldier);

// jonh.sayHello();

// PRACTICE 4 
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// Код возьмите из предыдущего домашнего задания

/*
//let arrGenres = []; //для моего метода

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        for ( let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
        } else {
            console.log("Error");
        }
    },
    toggleVisibleMyDB() {   
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        // for ( let i = 1; i <= 3; i++) {
        //     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
        //         i--;
        //     } else {
        //     arrGenres[i-1] = personalMovieDB.genres[i - 1];
        //     }
        // }
        for ( let i = 1; i <= 3; i++) {
            //создаем переменную Жанры и присваиваем ей ответ пользователя
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres === '' || genres === null) {
                console. log('Enter correct value');
                i--;
            } else {
                //в Свойства Жанр объекта помещаем значение Жанра 
                personalMovieDB.genres[i - 1] = genres;
                personalMovieDB.genres.sort(); // просто для сортировки
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }
};
// arrGenres.forEach(function(genre, i) {
//     console.log(`Любимый жанр #${i + 1} - это ${genre}`);
// }
// ); 


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();

// console.log(arrGenres);
console.log(personalMovieDB);
*/