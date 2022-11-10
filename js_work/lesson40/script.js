'use strict';

// const now = new Date('2022-11-10');
// new Date.parse('2022-11-10');

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for(let i = 0; i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`цикл отрпаботал за ${end - start} миллисекунд`);