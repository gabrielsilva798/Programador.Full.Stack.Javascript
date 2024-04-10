//        FUNÇÃO DE ALTA CLASSE
// Ela recebe e retorna outras funções
// funções quee são enviadas como PARÂMETROS dela são chamadas de CALLBACK.

//é esperado que a variável printer receba uma função
//          O PRINTER RECEBE O NOME DE CALLBACK
function doubleVelocity(velocity, printer){ 
    console.log("Entrei em doubleVelocity.")
    let newVelocity = velocity * 2;
    printer(newVelocity); //por isso ela está sendo usada como função.
    return newVelocity;
}

// função de exemplo que vai ser usada de parâmetro para a FUNÇÃO DE ALTA CLASSE acima
let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s");
}

//chama-se a função se PARENTESES, já que ela só vai ser execuldad dentro da FUNÇÃO DE ALTA CLASSE
doubleVelocity(80, printVelocity);

//posso adcionar o RETURN em uma variável
let newVelocity = doubleVelocity(60, printVelocity); //execulta os CONSOLES.LOG() automaticamente
console.log(newVelocity) //A VARIÁVEL RECEBE O RETURN, ai ele printa 120


// POSSO CHAMAR UMA FUNÇÃO ANONIMA (arrow function) DIRETO NO CALLBACK
let anotherVelocity = doubleVelocity(50, velocity => {
    console.log("função criada na hora")
    console.log("Outra velocidade: " + velocity)
})