let spaceship= "Golias";
let velocity = 80;

console.log(spaceship === velocity ? "igual" : "diferente");


// == compara valores           === compara valores e o tipo de dado
console.log(velocity == "80");
console.log(velocity === "80");

console.log(velocity != "80"); //!= diferente em relação a valores

console.log(velocity !== "80"); //!== diferente em relação a valores e TIPO

/*ELE COMPARA EM ORDEM ALFABÉTICA, SE SPACESHIP VEM ANTES DE "GOLIAS"
 *COMO M VEM DEPOIS DO G, RETORNA FALSE
 *AUXILIO: A vale 1          e Z vale 26;*/
console.log(spaceship > "Monkey")