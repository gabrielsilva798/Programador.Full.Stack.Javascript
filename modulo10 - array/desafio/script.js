// NOME, QTD TRIPULANTES, ENGATE CONCLUÍDO
const hitchSpaceships =[
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

let more9Hosts = hitchSpaceships.filter(element => {
    if(element[1] > 9){
        return element;
    }
})

let newMore9Hosts = more9Hosts.map(element => {
    return element[0]
})
let joinNewMore9Hosts = newMore9Hosts.join(", ")
//console.log(newMore9Hosts)

let numberNotHitch = (hitchSpaceships.indexOf(hitchSpaceships.find(notHitch)) + 1);
function notHitch(element){
    if(element[2] == false){
        return element;
    }
}

//console.log(numberNotHitch)

let upcasedSpaceships = hitchSpaceships.map(function(currentSpaceship){
    let newCurrentSpaceships = currentSpaceship;

    let newSpaceship = currentSpaceship[0].toUpperCase();
    newCurrentSpaceships[0] = newSpaceship;
    return newCurrentSpaceships;
})

let newUpcasedSpaceships = upcasedSpaceships.join("\n")

alert("Naves com mais de 9 tripulantes: " + joinNewMore9Hosts + "\nPrimeira plataforma com engate pendente: " 
    + numberNotHitch + "\n" + newUpcasedSpaceships)