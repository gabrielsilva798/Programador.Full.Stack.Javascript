let spaceship = {
    name: prompt("Qual o nome da nave? "),
    type: prompt("Qual o tipo da nave? "),
    maxVelocity: prompt("Qual a velocidade máxima da nave? "),
    velocity: 0,
    acceleration: function(newVelocity){
        this.velocity += newVelocity;
    }
}

let isAcceleration = 1;

while (isAcceleration == 1){
   isAcceleration = prompt("selecione a opção para acelerar ou parar a nave?"
        +" \n1- Acelerar\n2-Parar");

    if(isAcceleration == 1){
        let newVelocity = parseFloat(prompt("Quanto voce quer acelerar a nave? "))
        spaceship.acceleration(newVelocity)
        if(spaceship.velocity > spaceship.maxVelocity){
            alert("VELOCIDADE MÁXIMA NÃO PODE SER EXEDIDA: \n" + spaceship.maxVelocity
                + "\nNome da nave: " + spaceship.name + "\nTipo da nave: " + spaceship.type 
                + "\nvelocidade atual: " + spaceship.velocity);
            break;
        }
    } else if (isAcceleration == 2){
        alert("Nome da nave: " + spaceship.name + "\nTipo da nave: " + spaceship.type 
        + "\nvelocidade atual: " + spaceship.velocity)
    } else{
        alert("VALOR INVÁLIDO!! \n"
            +"\nNome da nave: " + spaceship.name + "\nTipo da nave: " + spaceship.type 
            + "\nvelocidade atual: " + spaceship.velocity)
    }

}