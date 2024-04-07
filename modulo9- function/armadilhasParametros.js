//                   EM JS NENHUM PARÂMETRO É OBRIGATÓRIO
function mensagePilot(name, mensage = "Olá"){ //por padrão NAME tem valor UNDEFINED
    if(name == undefined){
        console.log("nome invalido")
    } else{
        console.log(mensage + ", " + name);
    }
};

mensagePilot('joão', 'tudo bem')
mensagePilot('dani')
mensagePilot()  //ele exibi UNDEFINED

function speedUp(velocity, unit = "km/s", accelaration){
    let newVelocity = velocity + accelaration;
    console.log("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, "mi/s", 20);
//ELE ATRIBUI NA ORDEM, LOGO ACCELARATION RECEBE NADA
speedUp(50, 20); //vai retonar NAN20, para evitar isso coloque o parâmetro com valor padrão por último

function speedUp2(velocity, accelaration, unit = "km/s"){
    let newVelocity = velocity + accelaration;
    console.log("Nova velocidade: " + newVelocity + unit)
}

//                          COLOQUE O PARÂMETRO COM VALOR PADRÃO POR ÚLTIMO
speedUp2(50,20);