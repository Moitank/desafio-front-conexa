
const salvarConsulta = document.querySelector("#salvarConsulta")
const modal = document.querySelector("#modal")

function abrirModal () {
    modal.classList.remove("Invisivel")
}

function fecharModal () {
    modal.classList.add("Invisivel")
}

salvarConsulta.addEventListener("click", (e) => {
    e.preventDefault()
    
    const nomePaciente = document.querySelector("#nomePaciente").value
    const date = document.querySelector("#data").value
    const dataCompleta = new Date(date.toString())
    console.log(nomePaciente,dataCompleta)
    const token = localStorage.getItem("token")
    console.log(token)
    requisicaoConsulta(dataCompleta, token)
}
)

const requisicaoConsulta = (date, token) => {
    const data = {
        patientId: 1,
        date: date
    }
    fetch(" http://localhost:3333/consultations", {
        method: "POST",
        headers: {
            authorization: token
        },
        body: data
    })
    .then(response => response.json() )
    .then(dados => console.log(dados))
    .catch(error => console.log(error))
}