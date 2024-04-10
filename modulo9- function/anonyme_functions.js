//            FUNÇÕES ANONIMAS não tem nome, podem ser amazenadas em variáveis
//     FUNÇÃO ANONIMA NÃO PODE SER EXECULTA ANTES DE SER CRIADA, IGUAL UMA FUNÇÃO NORMAL
console.log(speedUp(60, 10))
console.log(doubleSpeed(60, 10)) // vai dar erro, por ser chaamda antes de ser criada


let doubleSpeed = function(velocity){ return velocity * 2} //função sem nome7

function speedUp(velocity, accelaration){ //função normal
    return velocity + accelaration;
}


let newVelocity = doubleSpeed(40); //chama-se a variável e colocar um parâmetro nela, caso neccessário