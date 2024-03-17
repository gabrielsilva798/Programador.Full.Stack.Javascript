let velocidade = 45;

// depois que ele encontra o CASE aceitável ele continua executando até achar a palavra BREAK
switch(velocidade * 2) {
    case 80:
        console.log("Velocidade mínima")
    case 90: // NÃO TEM NADA, MAS ELE RETORNA O CASE 100, POR CAUSA DO BREAK
    case 100:
        console.log("Velocidade aceitável")
     // break //se eu comentar esse BREAK ele execulta o próximo e para no próximo BREAK
    case 110:
        console.log("Velocidade alta, mas aceitável")
        break
    default:
        console.log("Velocidade não identificada")
}

let spaceship = "Elemental";

switch(spaceship) {
    case "Golias":
        console.log("Nave mais resistente")
        break
    case "Raptor":
        console.log("Nave mais rápida")
        break
    case "Enterprise":
        console.log("Nave da frota estrelar")
        break
    default:
        console.log("Nave comun")
}