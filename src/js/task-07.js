const text = document.getElementById("text");
const fontSizeControl = document.getElementById("font-size-control");

fontSizeControl.addEventListener("input", (e) => {
  text.style.fontSize = `${e.target.value}px`;
});
