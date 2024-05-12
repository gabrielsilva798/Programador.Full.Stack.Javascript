class Spaceship{
    constructor(name, qtdCrew){
        this.name = name;
        this.qtdCrew = qtdCrew;
        this.engated();
    }

    engated = false;
    openDoor = false

    engated(){
        this.engated = true;
        this.openDoor = true;
    }
}

let spaceshipList = [];
let options;

while(true) {
    options = prompt("1- Realizar engate?\n2- Imprimir naves\n3- Sair do programa");
    
    if(options == "1") {
        let spaceshipName = prompt("Informe o nome da espaconave; ")
        let qtdNewCrew = prompt("Informe o numero de tripulantes: ")

        let newSpaceship = new Spaceship(spaceshipName, qtdNewCrew);
        newSpaceship.engated();

        spaceshipList.push(newSpaceship);

    } else if (options == "2") {
        for(let i = 0; i<spaceshipList.length; i++){
            alert("nome: " + spaceshipList[i].name + "\nQuantidade de tripulantes: "
            + spaceshipList[i].qtdCrew + "Está engatada: " 
            + (spaceshipList[i].engated ? "Sim": "Não") + "\nPortas estão abertas: "
            + (spaceshipList[i].openDoor ? "Sim": "Não"))
        }
    } else if(options == "3") {
        break;
    }
}