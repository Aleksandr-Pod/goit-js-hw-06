const refs = {
    inputName: document.querySelector("#name-input"),
    output: document.querySelector("#name-output")
}

refs.inputName.addEventListener('input', onInputName);

function onInputName(event) {
    event.currentTarget.value == false ?
        refs.output.textContent = "Anonymous" :
        refs.output.textContent = event.currentTarget.value
}