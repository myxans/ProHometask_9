//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let array1 = []; 

for (let i = 10; i <= 20; i++) {
    array1.push(i)
};

console.log(array1);

//Вивести квадрати чисел від 10 до 20.

let array2 = [...array1];

for (let item in array2) {
    array2[item] = array2[item] ** 2
};

console.log(array2);

//Вивести таблицю множення на 7.

let array3 = [...array1];

for (let item in array3) {
    array3[item] = array3[item] * 7
};

console.log(array3);

//Знайти суму всіх цілих чисел від 1 до 15.

let array4 = [];

let sumArray4 = 0;

for (let i = 0; i <= 15; i++) {
    array4.push(i)
} for (i = 0; i < array4.length; i++) {
    sumArray4 += array4[i]
};

console.log(sumArray4);

//Знайти добуток усіх цілих чисел від 15 до 35.

let array5 = [];

let multArray5 = 1;

for (let i = 15; i <= 35; i++) {
    array5.push(i)
} 

array5.forEach(
    (elem) => {
        multArray5 *= Number(elem)
    }
);
console.log(multArray5);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let array6 = [];

let sumarray6 = 0;

let average = 0;

for (i = 1; i <= 500; i++) {
    array6.push(i)
} for (i = 1; i < array6.length; i++) {
    sumarray6 += array6[i]
};

console.log(average = sumarray6 / array6.length)

//Вивести суму лише парних чисел в діапазоні від 30 до 80.

let array7 = [];

let even = [];

for (i = 30; i <= 80; i++) {
    array7.push(i)
} 

array7.forEach(elem => {
    if (elem % 2 == 0) {
        even.push(elem)
    }
});

console.log(even)

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let array8 = [];

let evenThree = [];

for (i = 100; i <= 200; i++) {
    array8.push(i)
} 

array8.forEach(elem => {
    if (elem % 3 == 0) {
        evenThree.push(elem)
    }
});

console.log(evenThree)
