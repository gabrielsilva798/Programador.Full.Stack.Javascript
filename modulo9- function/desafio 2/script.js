let Velocity = 150;

/* crie uma função para desacelerar 20km/s a cada segundo*/
function slowDown(velocity, printer){
    let deceleration = 20;

    while(velocity > 0){
        printer(velocity);
        velocity -= deceleration;
    }
    alert("A nave está parada e as comportas podem ser abertas.")

    return velocity; //OPCIONAL
}

let printerstartVelocity = Velocity => {
    console.log("Velocidade atual de: " + Velocity + "km/s")
}

slowDown(Velocity, printerstartVelocity);