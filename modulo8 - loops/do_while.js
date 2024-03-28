let vecolity = 50;
let acceleration = 5;
const maxVelocity = 100;

/*
do{
    vecolity += acceleration;
    console.log("Velocidade atual " + vecolity + "km/s")
}while(vecolity < maxVelocity);
*/

//          MESMO SENDO FALSE, ELE EXECULTA UMA VEZ, RETONANDO 55
do{
    vecolity += acceleration;
    console.log(vecolity + "km/s")
}while(vecolity > maxVelocity); // inveti o sinal para ser FALSE