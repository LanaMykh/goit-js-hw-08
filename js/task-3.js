//Напиши скрипт, який під час набору тексту в інпуті input#name-input
//(подія input) підставляє його поточне значення в span#name - output
// як ім’я для привітання.Обов’язково очищай значення в інпуті по краях від пробілів.
//Якщо інпут порожній або містить лише пробіли,
//то замість імені у спан має підставлятися рядок "Anonymous".


const inputName = document.querySelector("#name-input");
//или так
//const inputName = document.getElementById("name-input");

const outputName = document.querySelector("#name-output");
//или так
//const outputName = document.getElementById("name-output");
 
inputName.addEventListener(`input`, () => {
    const userName = inputName.value.trim();
    outputName.textContent = userName || 'Anonymous';
});