let spaceship = prompt("Nome da nave: ");
let velocity = 0;

function optionValues(){ 
    let chosen = prompt("        Escolha uma opção:\n1- Acelerar a nave em 5/kms\n2- desacelerar a nave em 5/kms\n"+
    "3- Imprimir dados de bordo\n4- Sair do programa.");    

    if(chosen == 1){
        velocity += 5;
    } else if(chosen == 2){
        velocity -= 5;
        if(velocity < 0){
            velocity = 0;
            alert("Velocidade não pode ser menor que 0!")
        }
    } else if(chosen == 3){
        alert("Nome da nave: "+ spaceship + "Velocidade: " + velocity)
    } else if (chosen < 0 || chosen > 4){
        alert("Opção invalida!!")
    }

    return chosen;
}

while(optionValues() != 4){
    optionValues()
};
