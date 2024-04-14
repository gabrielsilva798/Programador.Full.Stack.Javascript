//array criado
let sapceshipNames = ["Supernova", "Elemental", "Helmet"];

// acessar um elemento de um array. é igual na STRING
console.log(sapceshipNames[0])

// modificar um elemento de um array
sapceshipNames[2] = "Starship"
console.log(sapceshipNames[2])

//diferente do JAVA o array pode ter mais de um tipo de dado.
let spaceshipInfo = ["Colossus", 7, true]
console.log(spaceshipInfo)

//posições que não existem retornam INDEFINIDED
console.log(spaceshipInfo[3])

//eu posso criar um array usando uma classe ARRAY
let spaceshipNamesClass = new Array("Supernova", "Elemental", "Helmet", "Colossus")
console.log(spaceshipNamesClass)

//se colocar um número SÓ como parâmetro no new Array, ele cria um array com 5 valores UNDEFINIELD
// PREFIRA USAR O NEW ARRAY SOMENTE QUANDO VC QUISER UM ARRAY COM VALORES VAZIOS
let getNumber = new Array(5);
console.log(getNumber)

