// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let str = '';

for (let i = 20; i <= 30; i += 0.5) {
    if (i === 30) {
        str += i;
    } else {
        str += i + ', ';
    }
}
console.log(str)

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let hryvnia = '';

for (let i = 10; i <= 100; i += 10) {
    if (i === 100) {
        hryvnia += i * 27 + '₴';
    } else {
        hryvnia += i * 27 + '₴, ';
    }
}
console.log(hryvnia)

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let num = '';
const n = 3900;

for (let i = 1; i <= 100; i++) {
    if (i ** 2 > n) {
        break
    } else {
        if((i + 1) ** 2 > n) {
          num += i;  
        }
        else {
           num += i + ', '; 
        }
    }
}
console.log(num);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const x = 11;
const xModule = Math.abs(x);

if (xModule === 1) {
    console.log("1 не є ані простим, ані складеним");
} else {
    const arr = [];
    for (let i = 2; i < xModule; i++) {
        if (xModule % i === 0) {
            arr.push(i);
            break
        }
    }
    if (arr.length === 0 ) {
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
        break
    }
}

if (posibilty) {
    console.log("Можна одержати")
} else {
    console.log("Не можна одержати");
}