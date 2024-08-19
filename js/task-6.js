//Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

//Є input, у який користувач вводить бажану кількість елементів.
//Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція
// з відповідною кількістю елементів і очищатися значення в інпуті.
//При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
//Після натискання на кнопку Destroy колекція елементів має очищатися.

//Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову,
// мають додаватися нові < div > елементи в DOM.

//Для рендеру елементів на сторінці створи функцію createBoxes(amount),
//яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

//Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount.
// Усі ці < div > мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

//Розміри першого <div> елемента мають бути 30px на 30px.
//Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '5px';
      boxes.push(box);
      size += 10;
    }

    return boxes;
  }

//const fieldsControl = document.querySelectorAll("#controls");

const fieldInput = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

btnCreate.addEventListener('click', () => {

    const amount = parseInt(fieldInput.value);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    boxesContainer.innerHTML = '';
    const boxes = createBoxes(amount);
    boxesContainer.append(...boxes);
    fieldInput.value = '';
  
  });

  btnDestroy.addEventListener('click', () => {
       boxesContainer.innerHTML = '';
  });