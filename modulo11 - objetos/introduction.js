// {} indicam que a variável é do tipo objeto
let spaceship = {
    name:"Fenix",
    crewQtd: 7,
    type:"Batalha"
}
console.log(spaceship)

//para acessar um VALOR, eu coloco a CHAVE depois de um PONTO, igual o java
console.log(spaceship.type)
//também posso pegar o valor igual no array e nas strings, mas colocando entre parenteses a chave
console.log(spaceship["name"])

//posso adcionar um novo elemento também
//posso usar ponto ou parenteses, mas nos parenteses vai entre virgula a chave
spaceship.isHitched = false;
spaceship["level"] = 100
console.log(spaceship["isHitched"])
console.log(spaceship.level)

//posso criar um objeto vázio
let spaceship2 = {}
console.log(spaceship2)
//outra forma
let spaceship3 = new Object();
console.log(spaceship3)