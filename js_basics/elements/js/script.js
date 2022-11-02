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
/*
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
*/
/*
const box = document.getElementById('box'); // поиск по ID
console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);

const circles = document.getElementsByClassName('circle'); // мы обращаемся к странице и пытаемся получить 
// все элементы через определенный класс. метод знает что ищется класс (точка не ставится)
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // помещаем CSS селектор
// при указании класса обязательно ставится точка
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart'); // возвращает первый попавшийся элемент с данным классом со страницы
// попадающий под данный тег
console.log(oneHeart);

const oneDiv = document.querySelector('div'); // возвращает первый попавшийся элемент с данным тегом со страницы
console.log(oneHeart);
*/

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button'); // здесь псевдомассив
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');

// console.dir(box); 
// dir позволяет понимать что мы можем сделать с элементом на странице представляя его в качестве объекта

// box.style.backgroundColor = 'blue'; 
// // меняем цвет box
// box.style.width = '500px';
// // меняем ширину

btns[1].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; 
// // код не сработает, так как я обращаесь не какому-то конкретному элементу а к псевдомассиву

circles[0].style.backgroundColor = 'red'; 
// поэтому указываем конкретный элемент

// как же назначить сразу несколько ИНЛАЙН стилей - cssText
box.style.cssText = 'background-color: blue; width: 500px';
// сюда мы можем подставлять также переменные .. 'background-color: blue; width: ${size}px'

// Если нужно произвести одни и те же действия сразу над несколькими элементами

// используем ЦИКЛ, For OF или For Each (последний существует если используем querSelAll)
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// как же создать элемент с помощью скрипта?
const div = document.createElement('div');

// создаем текстовые узлы (NODE)
// привыкаем к тому что элементы на странице называются NODE'ы
// const text = document.createTextNode('Тут был я');

// производим манипуляции с элементом через классы
div.classList.add('black');
// всё, элемент создан - он лежит внутри JS. К HTML он никакого отношения не имеет

// как же добавить элемент в какую-либо часть документа?
document.body.append(div);
// вставили div в конец боди

// document.querySelector('.wrapper').append(div);
//если мы единожды используем элемент - то необязательно под него создавать пременную

// wrapper.append(div); // в конец родителя вставляем  
// wrapper.appendChild(div);

// wrapper.prepend(div); // в конец родителя

// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div); // div перед первым сердчеком
// hearts[0].after(div); // div после первым сердчеком

// circles[0].remove(); // удаляет кружочек
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]); // указываемя что 1е сердечко мы заменяем 1м кружочком
// wrapper.replaceChild(circles[0], hearts[0]); // вставляем кружок на место сердечка

// как же поместить текст в какой-либо элемент?
// div.innerHTML = "Hello world"; 
div.innerHTML = "<h1>Hello world</h1>"; // когда мы хотим вставить HTML структуру

// есть и второй метод
// div.textContent = 'Hello'; // когда хотим вставить только текст
// div.textContent = "<h1>Hello world</h1>"; //!!!!!! вставится только 

// как же ставить данные перед или после того или иного элемента?
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); 