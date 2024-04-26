//  AQUI ENTRA O CONCEITO DE MÉTODO/ATRIBUTO, ESQUCENDO FUNÇÃO E VARIÁVEIS
let spaceship = {
    neme: "Démeter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
        console.log(this.name) //igual no java, THIS retorna o próprio objeto
    }
}

// como é uma função eu tenho que abrir e fechar os parenteses
spaceship.turnOn(); 

//adcionando um atributo de velocidade e um método para acelerar a nave
spaceship.velocity = 0; //adc novo atributo
// PARA EVITAR REPETIR O NOME DA NAVE EU USO O THIS IGUAL NO JAVA
spaceship.speedUp = function(accelaration){
    this.velocity += accelaration;
}

console.log(spaceship)
spaceship.speedUp(10)
console.log(spaceship)