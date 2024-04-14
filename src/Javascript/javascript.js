const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#assunto");
const textAreaInput = document.querySelector("#mensagem")
const button = document.querySelector("#submit-button");

const required = document.querySelector(".msg");


button.addEventListener("click", (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;    
    const assuntoValue = assuntoInput.value;
    const textAreaValue = textAreaInput.value;

    if (nameValue === "" || emailValue === "" || assuntoValue === "" || textAreaValue === "") {
        required.textContent = "Por favor, preencha os campos!";
        required.classList = "erro";

        setTimeout(() => {
            required.textContent = "";
            required.classList = "";
        }, 3000);
        return;
    }

    alert("Sua mensagem foi enviada! Tempo estimado de repsosta de um dia útil");
});
