//posso colocar QUALQUE VALOR na propriedade
let spaceshipStation = {
    nameSpaceship:"Fox",
    platformsQtd: 10,
    "new name": "Estelar", //EVITE COLOCAR CHAVE/PROPRIEDADES COM VALORES STRING, NUMBER E BOLEAN
    true:false, 
    2:  "Descoberta"
}
//MAS DAR ERRO PARA ACESSAR DA FORMA COM PONTO
//console.log(spaceshipStation.2);

//MAS eu posso acessar com []
console.log(spaceshipStation[2])