alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let nome = prompt("Informe seu nome: ");

let idade = prompt("Informe sua idade: ")

let idadeCorreta = confirm("Sua idade é " + idade + "?")

alert("Nome: " + nome + "\n Idade: " + idade + "\nIdade " + (idadeCorreta === false ? "não confirmada" : "confirmada"))