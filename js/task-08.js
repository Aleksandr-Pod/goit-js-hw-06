const formRef = document.querySelector("form.login-form");
formRef.addEventListener('submit', onSubmit)

function onSubmit(ev) {
    ev.preventDefault();
    const mail = ev.currentTarget.elements.email.value;
    const password = ev.currentTarget.elements.password.value;
    const data = { mail, password };
    console.log(data)

    if (mail === "" || password === "") {
        return alert('Введите все данные');
    }
    formRef.reset();
  
}

 

    // const formData = new FormData(ev.currentTarget.elements);
    // const newData = {};
    // formData.forEach((value, fieldName) => {
    //     newData.fieldName,
    //     newData.value
    // })
