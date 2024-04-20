let spaceshipsNames = ['Elemental', 'Demeter', 'Puller', 'Golias', 'Supernova']

// Array.forEach.(function(elementoAtualDoArray, indice){ corpo da função})
// poso passar a função diretamente dentro do forEach
spaceshipsNames.forEach(function(currentSpaceship, index){
    console.log("Nave: "+ currentSpaceship + "\nIdice: " + index)
})


/*ARRAY.MAP(CALLBACK) percorre e altera os elementos de uma array, sem alterar o array em si,
ele tem um retorno que trás essas alterações.
*/
let upcaseSpaceships = spaceshipsNames.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase();
    return upcased; 
})

console.log(upcaseSpaceships)


//.FILTER filtra elementos de um array de acordo com uma expressão lógica
// ele retorna um novo array
let mais7Caractere = spaceshipsNames.filter(element => { return element.length >= 7})
console.log(mais7Caractere);

//.FIND igual o .FILTER, mas retorna o primeiro elemento que satisfazer a condição
let findMais7Caractere = spaceshipsNames.find(element => { return element.length >= 7})
console.log(findMais7Caractere)