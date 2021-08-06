

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
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
           
        body: JSON.stringify(data),
       
    })
    .then (response => response.json())
    .then (data => {
        const name = data.name
        const token = data.token

        localStorage.setItem("name", name)
        localStorage.setItem("token", token)
        console.log(token)
    })
    .catch (error => console.log(error))
}