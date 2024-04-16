//    SPLICE = emendar or costurar
// ele substitui o array original
let spaceshipsNames = ["Elemental", "Darwin", "Artemis", "Supernova"]
console.log(spaceshipsNames)

/*1º parâmetro
        primeiro recebe o número onde iniciar a remoção, incluindo o próprio elemento*/
/*2º parâmetro
        despois quantos elementos excluir, incluindo o elemento inicial*/
/*3º parâmetro
        do 3º em diante, recebe os elementos que ficaram no lugar
        O 3º PARÂMETRO É OPCIONAL, VC PODE SIMPLESMENTE REMOVER E NÃO COLOCAR NADA NO LUGAR*/
let removedSpaceships = spaceshipsNames.splice(1, 2, "Demeter", "Puller", "Golias")

//ele tem retorno que são as variáveis removidas, por isso coloquei em uma variável
console.log(removedSpaceships)

/*essa e a variável alterada. mesmo colocando o resultado em uma variável externa, 
ela ainda é alterada*/
console.log(spaceshipsNames)

//ELE É MUITO USADO PARA REMOVER SOMENTE 1 ELEMENTO TAMBÉM
spaceshipsNames.splice(1,1) //removeu o elemento 1 até o 1, ou seja, sómento o 1 foi excluído
console.log(spaceshipsNames)