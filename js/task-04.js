let counterValue = 0;

const btnIncrement = document.querySelector("[data-action='increment']");
const btnDecrement = document.querySelector("[data-action='decrement']");
const span = document.getElementById("value");

btnIncrement.addEventListener("click", () => {
  span.innerText = ++counterValue;
});

btnDecrement.addEventListener("click", () => {
  span.innerText = --counterValue;
});
