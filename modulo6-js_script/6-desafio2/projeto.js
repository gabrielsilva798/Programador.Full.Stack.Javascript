let nomePessoaMaisVelha = prompt("Informe o nome da pessoa mais VELHA: ")
let idadePessoaMaisVelha = prompt("Informe a idade da pessoa mais VELHA: ")

let nomePessoaMaisNova = prompt("Informe o nome da pessoa mais NOVA: ")
let idadePessoaMaisNova = prompt("Informe a idade da pessoa mais NOVA: ")

let diferencaDeIdade = idadePessoaMaisVelha - idadePessoaMaisNova;

alert(
    "Nome da pessoa mais velha: " + nomePessoaMaisVelha + "\nIdade: " 
    + idadePessoaMaisVelha+ "\n\nNome da pessoa mais nova: " + nomePessoaMaisNova 
    + "\nIdade: " + idadePessoaMaisNova + "\n\nDiferença de idade é de " + diferencaDeIdade
);