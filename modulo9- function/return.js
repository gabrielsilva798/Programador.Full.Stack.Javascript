function speedUp(velocity, accelaration){
    let newVelocity = velocity + accelaration;
    return newVelocity;
}

let velocity = 80
let accelaration = 5;

console.log("Velocidade: " + velocity);

velocity = speedUp(velocity, accelaration);

console.log("Nova velocidade: " + velocity);