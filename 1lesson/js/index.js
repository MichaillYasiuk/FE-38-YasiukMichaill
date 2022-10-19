// Task 1. Вывести в консоль свое имя
console.log('Михаил');
// Task 2. Вывести в консоль число, месяц и год своего рождения
console.log('01.06.1993');
// Task 3. Вывести в консоль - Добро пожаловать в мир Java Script
console.log('Добро пожаловать в мир Java Script');
// Task 4. Вывести в alert сегодняшний год. После данную строку с кодом следует закоментировать.

//let currentYear = alert(2022);

// Task 5. C помощью alert вывести результат операции 400 + 500. Закоментировать.

//let sumNUmber = alert(400 + 500);

// Task 6. Создать на странице div с id = task6. С помощью document.querySelector() запишите в данный элемент текст '<p>Мой первый вывод на страницу</p>'.
// Изучить способ получения нашего дива. Изучить команду вывода.
let firstMessage = document.querySelector('#task6');
firstMessage.innerHTML = '<p>Мой первый вывод на страницу</p>';
//firstMessage.textContent = '<p>Мой первый вывод на страницу</p>';

// Task 7. Создайте на странице div с id = task7 С помощью document.querySelector() запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки.

let newNumber = document.querySelector('#task7');
newNumber.innerHTML = 12 * 12;

// Task 8. Создайте div с классом task8. С помощью document.querySelector() запишите в данный элемент текст 'Вывод элемента по классу'.
// Изучить способ получения нашего дива. Изучить команду вывода.

let classElement = document.querySelector('.task8');
classElement.textContent = 'Вывод элемента по классу';

// Task 9. Создайте следующую верстку на странице:
//<h2>Hello <span>everyone</span></h2>
// Замените с помощью document.querySelector() текст everyone на world.
// Изучить способ получения нашего дива. Изучить команду вывода.

let helloJs = document.querySelector('span');
helloJs.textContent = 'world';

// Task 10. Создайте div с классом task10. Получите его в переменную task10. С помощью innerHTML запишите внутрь переменной task10 число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!

let checkThisNumber = document.querySelector('.task10');
checkThisNumber.innerHTML = 3.1415;

// Task 11. Создайте div с классом task11. Получите его в переменную task11. С помощью innerHTML запишите в него строку:
// <img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки.

const ohMyGod = document.querySelector('.task11');
/*ohMyGod.innerHTML =
  '<img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">';*/

// Task 12. Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
// let z1 = 6;
// let z2 = 3;
// создадим див с класом произвольным
// помнестим умножение в переменную результат

let z1 = 6;
let z2 = 3;
let newResult = z1 * z2;
let documentWithResult = document.querySelector('.task12');
documentWithResult.innerHTML = newResult;

// Task 13. Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.

let y1 = 6;
let y2 = 3;
let resultTask13 = y1 / y2;

let elementTask13 = document.querySelector('.task13');
elementTask13.innerHTML = resultTask13;

// Task 14. Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.

let x1 = 'Hello ';
let x2 = 5;
let resultTask14 = x1 + x2;

const elementTask14 = document.querySelector('.task14');
elementTask14.innerHTML = resultTask14;
