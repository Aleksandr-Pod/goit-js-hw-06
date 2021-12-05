const valueRef = document.querySelector("#value");
valueRef.style.padding = "15px";
valueRef.style.backgroundColor = "gold";
let counterValue = 0;
const increase = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}
const decrease = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
btnDec.addEventListener('click', decrease);
btnInc.addEventListener('click', increase);
