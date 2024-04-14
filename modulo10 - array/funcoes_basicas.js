let spaceshipNames = ["Colossus", "Elemental", "Helmet"]

//PUSH() adciona um novo elemento ao fim do array
spaceshipNames.push("Supernova")
console.log(spaceshipNames)

//UNSHIFT() adciona um elemento ao começo do array
spaceshipNames.unshift("Fenix")
console.log(spaceshipNames)

//SHIFT() Remove o elemento na primeira posição 
//também retorna o elemento 
let shiftNewArray = spaceshipNames.shift()
console.log(spaceshipNames)
console.log(shiftNewArray)

//POP() remove o último elemento de array
//Ela também RETONA O ELMENTO REMOVIDO;
let popNewArray = spaceshipNames.pop()
console.log(spaceshipNames)
console.log(popNewArray) // retorna o elemento removido

//LENGTH; para saber o tamanho do array igual nas STRINGs
console.log(spaceshipNames.length) //posso claramento adciona isso a uma variável

//indexOf() server para achar a posição onde está um elemento, é a mesma coisa para STRINGs
console.log(spaceshipNames.indexOf("Elemental")) //também posso adcionar a uma variável
//quando ele não encontrar a posição ele retorna -1
console.log(spaceshipNames.indexOf("Golias"))