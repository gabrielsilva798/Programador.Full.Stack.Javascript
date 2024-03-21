/*
let velocity = 50;
let accelaration = 5;

while(velocity <= 100) {
    console.log("Acelerando: Estamos a " + velocity + "km/s") // para ANTES da ADIÇÃO
    velocity += accelaration;
    console.log(velocity); // para DEPOIS da ADIÇÃO
}


do{
    velocity += 5;
    console.log(velocity);
} while(velocity <= 100); */

//-------------------------------------------------------------------------------------------------------

let constelation = "Andromeda";
let pos = 0;
let constelationLength = constelation.length;

while(pos < constelationLength) {
    if(constelation[pos] == "A" || constelation[pos] == "a") {
        console.log(pos);
    }

    pos++;
}