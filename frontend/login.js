

const botao = document.querySelector("#entrar")

botao.addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    
    console.log(email, senha)
    requisicao(email, senha)

})

function requisicao (email, senha) {
    const data = {
        email: email,
        password: senha
    }
    console.log(JSON.stringify(data))

    fetch("http://localhost:3333/login", {
        method: "POST",
        body: JSON.stringify(data),
       
    })
    .then (response => response.json())
    .then (res => console.log(res))
    .catch (error => console.log(error))
}