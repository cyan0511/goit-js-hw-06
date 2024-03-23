const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.innerText}`);
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
});
