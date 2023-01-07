// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let str = '';

for (let i = 20; i <= 30; i += 0.5) {
    str += i + ', ';
}
console.log(str)

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let hryvnia = '';

for (let i = 10; i <= 100; i += 10) {
    hryvnia += i * 27 + '₴, ';
}
console.log(hryvnia)

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let num = '';
const n = 3500;

for (let i = 1; i <= 100; i++) {
    if (i ** 2 > n) {
        continue
    } else {
        num += i + ', ';
    }
}
console.log(num);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const x = 41;
const xModule = Math.abs(x);
let arr = '';
let isPrime = true;

if (xModule === 1) {
    console.log("1 не є ані простим, ані складеним");
} else {
    for (let i = 2; i <= xModule; i++) {
        if (xModule % i === 0) {
            arr += i;
            if (arr.length == 1) {
                isPrime = false;
            }
        }
    }
    if (isPrime) {
        console.log(`${x} це просте число`);
    } else {
        console.log(`${x} це складене число`);
    }
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

const y = 59049;
let posibilty = false;

for (let i = 0; i <= y; i++) {
    if (y === 3 ** i) {
        posibilty = true;
    }
}

if (posibilty) {
    console.log("Можна одержати")
} else {
    console.log("Не можна одержати");
}