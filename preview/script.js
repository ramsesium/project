const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay'); 

// btn.onclick = function() { // старая интерпритация
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('second Click');
// };

// btn.addEventListener('click', () => { // современная
//     alert('Click');
// });

//------------------------------------
// в данном примере мы создаем событие, которое происходит при клике мышки по первой кнопке
// мы создали отдельную переменную deleteElement в которую поместили функцию/ Функция начнет действовать после того как 
// пользователь кликнет по первой кнопке и функция удалит событие после того как выполнится условие i == 1
/*
let i = 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
*/
//------------------------------------

let i = 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
    //btn.addEventListener('click', deleteElement, {once: true}); 
    // событие произойдет однажды с помщью ОПЦИИ once
});

//_________________________________________________________

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();// метод говорит браузеру СТОЙ -не нужно переходить
    // по ссылке - мы будем делать кое-что другое -участок когда помещается вначало
    console.log(event.target);
});