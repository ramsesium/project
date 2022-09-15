/*
const   btn  = document.querySelector('button'),
        overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert("Click - cluck!!!");
// };

// btn.onclick = function() {
//     alert("Click - Second!!!");
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('Click - Second!!!');
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement); // после того как мы нажмем на 
// кнопку будет выполняться функция deleteElement
overlay.addEventListener('click', deleteElement);

// как отменять события?
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // бразер понимает что надо остановиться не не нужно переходить по ссылке
    // помещается в начало

    console.log(event.target);
});
*/
// +++++++++++++++++++++++++++
// ПРИМЕР для нескольких кнопок 
const   btns  = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');

let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.target);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement); // после того как мы нажмем на 
// // кнопку будет выполняться функция deleteElement
// overlay.addEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});