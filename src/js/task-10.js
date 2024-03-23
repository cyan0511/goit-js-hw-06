const divBoxes = document.getElementById('boxes');

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputText = document.querySelector('input[type=number]');

btnCreate.addEventListener('click', () => {
  createBoxes(inputText.value);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let boxSize = 30; 

function destroyBoxes() {
  boxSize = 30;
  divBoxes.textContent = '';
}


function createBoxes(amount) {
  // destroyBoxes();  
 
  for (let i = 0; i < amount; i++) {
    const el = document.createElement('div');
    el.style.width = `${boxSize}px`;
    el.style.height = `${boxSize}px`;
    boxSize += 10;
    el.style.backgroundColor = getRandomHexColor();
    divBoxes.append(el);
  }

}