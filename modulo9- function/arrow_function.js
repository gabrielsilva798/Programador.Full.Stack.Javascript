// ARROW FUNCTION também são funcões anonimas,
//=> é um ARROW, 
//           abaixo como é a sintaxe de uma ARROW FUNCTION
const doubleVelocity = (velocity) => { return velocity * 2};

console.log(doubleVelocity(60))

//         POSSO SIMPLIFICAR MAIS
// tiro as CHAVES e tiro o RETURN, o RETURN fica omitido, mas está lá
const doubleVelocity2 = (velocity) => velocity * 2;

console.log(doubleVelocity(80))

//          POSSO SIMPLIFICAR AINDA MAIS, SE TIVER SÓ 1 PARÂMETRO.
//se ela tiver só UM PARÂMETRO, eu posso tirá os PARENTESES.
const doubleVelocity3 = velocity => velocity * 2;

console.log(doubleVelocity3(90))