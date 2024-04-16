let namesSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10]]
namesSpaceships.push(["Colossus", [true, false]]) //só adcionando mais um arrray dentro mesmo

// ACESSA UM ELEMENTO DENTRO DOS ARRAYS INTERNOS, IGUAL JAVA E PYTHON
//              LEMBRANDO QUE COMEÇA A CONTAR DO 0
let position = namesSpaceships[4][1][0];
console.log(position)