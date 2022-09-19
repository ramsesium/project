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
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});
// кликая по первой кнопке мы проверяем - есть класс РЕД у второй кнопки
// если его нет - добавляем и наоборот

btns[0].addEventListener('click', () => {
    btns[2].classList.toggle('black');
}); // можно применить ТОГЛ но лучше всегда проверять наличие класса условиями ИФ 

// console.log(btns[0].className); // старье - не пользыемся


// +++++++++++++++++++++++++++++++++++++++
// делегирование событий

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello');
//     }
//     // console.dir(event.target); // dir показывает ивент таргет в качестве обьекта
//     // console.log(event.target); 
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello blue');
//     }
// });


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
}); // теперь при наведении на красную кнопку ничего не происходит тк
// наша кнопка ничего не знает про обработчик события

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) { // какойто элемент совпадает с чем-то
        console.log('Hello MATCHES');
    }
    // console.dir(event.target); // dir показывает ивент таргет в качестве обьекта
    // console.log(event.target); 
});

//*******************************