class Spaceship {
    constructor(name){
        this.name = name;
        this.velocity = 0;
    }

    //métodos não precisam da palavra function, igual no java
    speedUp(accelaration){
        this.velocity += accelaration;
    }
}

// instanciando o objeto
let Atemis = new Spaceship("Ártemis")

console.log(Atemis);

//igual no java, vem um ponto antes do objeto
Atemis.speedUp(50);
Atemis.speedUp(30);

console.log(Atemis);