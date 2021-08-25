var calculate = document.querySelector("[data-button=calculate]");
var finish = document.querySelector("[data-button=concluir]");
var results = document.querySelector("[data-results]");
var error = document.querySelector("[data-error]")

calculate.addEventListener("click", (event)=>{
    event.preventDefault();
    pegaInputs();
})

finish.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.reload();
})

const pegaInputs = () => {
    var dataInputs = [];

    inputs = document.querySelectorAll('[data-input]');
    inputs.forEach(input => {
        SelectedInput = (input.options[input.selectedIndex]).getAttribute(`data-info`)
        dataInputs.push(SelectedInput)
    })
    
    // paciente = document.querySelector('[data-input=pacientes]')
    // pacienteID = paciente.options[paciente.selectedIndex].getAttribute('data-paciente')
    // dataInputs.push(pacienteID)

    // medicamento = document.querySelector('[data-input=medicamentos]')
    // medicamentoID = medicamento.options[medicamento.selectedIndex].getAttribute('data-medicamento')
    // dataInputs.push(medicamentoID)

    // administrao = document.querySelector('[data-input=administracoes]')
    // administraoID = administrao.options[administrao.selectedIndex].getAttribute('data-administracao')
    // dataInputs.push(administraoID)

    // marca = document.querySelector('[data-input=marcas]')
    // marcaID = marca.options[marca.selectedIndex].getAttribute('data-marca')
    // dataInputs.push(marcaID)

    quantity = document.querySelector("[data-info=quantidade]");
    dataInputs.push(quantity.value);
    validaInputs(dataInputs)
}

const validaInputs = (dataInputs) => {
    var calculate = true;
    dataInputs.forEach(input => {
        if (input == null || input == "") {
            error.textContent = "Por favor, preencha todos os campos!"
            error.classList.remove("invisible");
            calculate = false;
        }})
    if (calculate){
        error.classList.add("invisible");
        results.classList.remove("invisible");
        console.log(dataInputs);
    }
}