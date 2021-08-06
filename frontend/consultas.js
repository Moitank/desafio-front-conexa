function requisicaoGet() {
    const token = localStorage.getItem("token")
    console.log(token)
    
    fetch(" http://localhost:3333/consultations?_expand=patient", {
        method: "GET",
        headers: {
           
            Authorization: token
        }
    })
    .then(response => response.json())
    .then(dados => console.log(dados))
    .catch(error => console.log(error))
}

requisicaoGet()