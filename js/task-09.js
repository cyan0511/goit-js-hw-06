const body = document.getElementsByTagName("body")[0];
const btnChangeColor = document.getElementsByClassName("change-color")[0];
const spanColor = document.getElementsByClassName("color")[0];

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.innerHTML = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
