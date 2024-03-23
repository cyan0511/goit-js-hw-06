const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const el = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = ingredient;
  el.appendChild(li);
});
