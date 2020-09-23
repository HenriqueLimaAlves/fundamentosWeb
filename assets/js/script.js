/*
    por tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por classe: getElementsByClassName()
    por Seletor: querySelector()
*/ 

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Invalido!"
        txNome.style.color = "red"
    }else{
        txt.innerHTML = "Nome Valido!"
        txt.style.color = "green"
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail Invalido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email Valido!"
        txtEmail.style.color = "green"
    }
}