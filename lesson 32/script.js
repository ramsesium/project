// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild); // получаем 1го ребенка который являет уже элементов - wrapper
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); // получаем элемент на класс выше
// console.log(document.querySelector('#current').parentNode.parentNode);  // еще выше класс

// console.log(document.querySelector('[data-current="3"]').nextSibling); // указываем в разных кавычках - мы получаем
// // // текстовую Ноду - просто перенос строки
// // console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement); 

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; // оператор останавливает повторение цикла и начинает его заново уже с другим элементом
    }
    console.log(node);
}