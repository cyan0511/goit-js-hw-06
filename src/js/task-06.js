const input = document.getElementById("validation-input");

input.addEventListener("blur", (event) => {
  const {
    target: {
      value: { length: valueLength },
      dataset: { length: dataLength },
    },
    target,
  } = event;
  const isValid = valueLength === +dataLength;
  target.className = isValid ? "valid" : "invalid";
});
