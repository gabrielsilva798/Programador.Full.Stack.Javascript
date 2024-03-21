let nameShip = prompt("Qual o nome da nave? ");
let spacialWarp = confirm("Desseja entrar em dobra espacial? ");
let spacialWarpCount = 0;

while(spacialWarp == true) {
    spacialWarpCount++;
    spacialWarp = confirm("Desseja entrar na dobra espacial? ");
}

alert("Nome da nave: "+ nameShip + "\nContagem de dobras espaciais execultadas: "
     +  spacialWarpCount)