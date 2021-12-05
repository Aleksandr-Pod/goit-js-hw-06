function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

btnChangeColor.addEventListener('click', onClick);
function onClick () {
  const colorCode = getRandomHexColor();
  document.body.style.backgroundColor = colorCode;
  color.textContent = colorCode;
}
 