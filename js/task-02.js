const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

//          Вариант - 1
// const ulRef = document.querySelector("#ingredients");
// let list = "";
// ingredients.forEach(el => list += `<li class="list">${el}</li>`);
// ulRef.innerHTML = list;

//           Вариант - 2
// const ulRef = document.querySelector("#ingredients");
// const list = ingredients.map(el => `<li class="list">${el}</li>`).join("");
// ulRef.insertAdjacentHTML("afterbegin", list);

//           Вариант - 3
const ulRef = document.querySelector("#ingredients");

const list = ingredients.map(ingredient => {
  const listEl = document.createElement(`li`);
  listEl.classList = "list";
  listEl.textContent = ingredient;
  return listEl;
});
ulRef.append(...list);

 

