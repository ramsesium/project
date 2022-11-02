const   btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); // айтем позволяет получить класс,
//  который располагается под определенным индексом
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //если класса нет - будет добавлен и наоборот
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
    btns[1].classList.toggle('red');
});
// кликая по первой кнопке мы проверяем - есть класс РЕД у второй кнопки
// если его нет - добавляем и наоборот

// btns[0].addEventListener('click', () => {
//     btns[2].classList.toggle('black');
// }); // можно применить ТОГЛ но лучше всегда проверять наличие класса условиями ИФ 

// console.log(btns[0].className); // старье - не пользыемся


// +++++++++++++++++++++++++++++++++++++++
// делегирование событий

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') { 
//         // не все элементы поддерживают события клика и чтобы
//         // все работало правильно мы проверяем и ивет таргет и тэг нэйм
//         console.log('Hello');
//     }
//     // console.dir(event.target); // dir показывает ивент таргет в качестве обьекта
//     // console.log(event.target); 
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello blue');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// }); // теперь при наведении на красную кнопку ничего не происходит тк
// // наша кнопка ничего не знает про обработчик события

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);



// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches('button.red')) { // какойто элемент совпадает с чем-то
//         console.log('Hello MATCHES');
//     }
    // console.dir(event.target); // dir показывает ивент таргет в качестве обьекта
//      console.log(event.target); 
// });
// */
//*******************************
// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns.classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

// console.log();

// const   btns = document.querySelectorAll('button'),
//         wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn =>)

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);