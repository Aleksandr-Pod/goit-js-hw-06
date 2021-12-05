const inputRef = document.querySelector("#validation-input");
const dataLength = inputRef.dataset.length;  // Это Строка !!!

inputRef.addEventListener('blur', onInputCheck);
function onInputCheck(event) {
    inputRef.classList.add("invalid");
    if (event.currentTarget.value.length == dataLength) {
        inputRef.classList.replace("invalid", "valid")
    }
}
