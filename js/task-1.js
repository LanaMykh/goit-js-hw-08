// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
// і кількість елементів у категорії(усіх < li >, вкладених у нього).

const outerLists = document.querySelectorAll(".item");

console.log(`Number of categories: ${outerLists.length}`);

outerLists.forEach((elemOut) => {
    const elemTitle = elemOut.querySelector("h2");
    console.log(`Category: ${elemTitle.textContent}`);
    const innerLists = elemOut.querySelectorAll('ul');
    innerLists.forEach((elemIn) => {
        const innerList = elemIn.querySelectorAll('li');
        console.log(`Elements: ${innerList.length}`);
    });
});