let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
}

/*eu posso chamar funções de array a partir 
de um arra dentro de um object*/
spaceship.crew.push("Ten. Fernanda")
console.log(spaceship)

//POSSO CRIAR UM ARRAY DE OBJETOS TAMBÉ
let spaceshipsNames = [
    { name: "Elemental", crewQtd: 10},
    { name: "Colossus", crewQtd: 8},
    { name: "Helmet", crewQtd: 15},
]
/*POSSO ACCESAR O OBBEJTO DENTRO DO ARRY
E PEGAR UM ELMENTO DENTRO DELE DESPOIS*/
console.log(spaceshipsNames[1].crewQtd)

// como é um ARRAY eu posso usar o FOREACH assim
spaceshipsNames.forEach(spaceship => {
    console.log(spaceship.name + " tem " 
        + spaceship.crewQtd+ " Tripulantes.")
});

//POSSO TER UM OBJECT DENTRO DE OUTRO OBJECT
let spaceships = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Luck Skayak",
        age: 37
    }
}

/*para acessar é a mesma lógica, acessa
o 1º object e depois o 2º object*/
console.log(spaceships.captain.name)