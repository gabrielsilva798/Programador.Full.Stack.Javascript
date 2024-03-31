// VC PODE COLOCAR UM VALOR PADRÃO, CASO NADA FOR DIGITADO
function envioMensagem (nome = "sem nome") {
    console.log("olá " + nome)
}

envioMensagem() //sem valor padrão:      SOBRECARGA, na teoria, igual o java
envioMensagem("danni brito") // com valor padrão