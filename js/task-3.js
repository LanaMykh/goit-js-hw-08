const inputName = document.querySelector("#name-input");
//или так
//const inputName = document.getElementById("name-input");

const outputName = document.querySelector("#name-output");
//или так
//const outputName = document.getElementById("name-output");
 
console.log(outputName);
 
inputName.addEventListener(`input`, () => {
    const userName = inputName.value.trim();
    outputName.textContent = userName || 'Anonymous';
});