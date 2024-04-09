function setSpaceshipDetails(){
    console.log(spaceshipName); // funciona porque o VAR sobe como se tivesse sido declarado no começo da função
    console.log(spaceshipType); //dar erro porque o LET ainda não foi declarado

    let velocity = 50;
    if(velocity == 50){
        velocity = 60;
        var spaceshipName = "Elemental"; // o VAR eleva o nível do scopo da variável
        let spaceshipType = "Discovery"; //o LET não eleva o nível do escopo, por isso dar erro
    }

    console.log(velocity);
    console.log(spaceshipName);
    console.log(spaceshipType);
}

setSpaceshipDetails()