const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener('input', makeFontSize);
function makeFontSize() {
    textRef.style.fontSize = `${inputRef.value}px`;
}
