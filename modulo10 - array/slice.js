//SLICE significa dividir, fatiar
//diferente do SPLICE ele não alterar o array original, ele retorna um novo

//pega do elemento START, ATÉ O ANTERIOR DO ELEMENTO END
// ou seja, o AND -1
let spaceshipsNames = ['Elemental', 'Demeter', 'Puller', 'Golias', 'Supernova'];
let extractedNames = spaceshipsNames.slice(1,3); //EXTRAÍU O ELEMENTO 1 E O 2, NÃO O 3

console.log(spaceshipsNames);
console.log(extractedNames);