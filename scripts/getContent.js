const medicamentos = document.querySelector("[data-input=medicamentos]")
const marcas = document.querySelector("[data-input=marcas]")

const getFromAPI = (URL) => {
    return fetch(URL)
    .then( response  => {
        if (response.ok) {
            return data = response.json()   
        }
        alert('Não foi possível listar as opções do servidor!')
        throw new Error('não foi possível listar as opções do servidor!')
    })
}

const setMedicamentos = async () => {
    const data = await getFromAPI('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos');
    data.forEach(medicamento => {
        const option = document.createElement('option')
        option.textContent = medicamento.name
        option.value = medicamento.name
        option.dataset.info = `Med${medicamento.id}`
        medicamentos.appendChild(option)
    })
}

const setMarcas = async () => {
    const data = await getFromAPI('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas');
    data.forEach(marca => {
        const option = document.createElement('option')
        option.textContent = marca.name
        option.value = marca.name
        option.dataset.info = `Marca${marca.id}`
        marcas.appendChild(option)
    })
}

setMedicamentos()
setMarcas()