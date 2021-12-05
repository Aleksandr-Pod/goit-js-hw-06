const refs = {
    inputName: document.querySelector("#name-input"),
    output: document.querySelector("#name-output")
}

// outputRef.textContent = inputName;

refs.inputName.addEventListener('input', onInputName);
function onInputName(event) {
    refs.output.textContent = event.currentTarget.value
}