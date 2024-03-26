let spaceshipName = prompt("Digite o nome da espaçonave?")
let caracter = prompt("Qual caracter deseja substituí?")
let newCaracter =  prompt("Qual será o novo caractere? ")

let newSpaceship = "";

for(let i = 0; i < spaceshipName.length; i++) {
    if(spaceshipName[i] == caracter) {
        newSpaceship += newCaracter;
    } else {
        newSpaceship += spaceshipName[i];
    }
}

alert(newSpaceship);