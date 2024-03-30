let spaceshipName = prompt("Digite o nome da espaçonave: ")
let invertedSpaceshipName = "";
let position = spaceshipName.length;

do{
    if(spaceshipName[position - 1] == 'e'){
        break
    }
    invertedSpaceshipName += spaceshipName[position - 1]
    position--;
} while(position > 0)

alert("Nome original da nave: " + spaceshipName 
        + "\nNome após ocutação: " + invertedSpaceshipName)