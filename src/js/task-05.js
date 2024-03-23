const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  const {
    target: { value },
  } = event;
  output.innerText = value.length === 0 ? "Anonymous" : value;
});
