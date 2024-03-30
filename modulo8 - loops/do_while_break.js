let spaceship = "Supernova";
let pos = 0;

//BREAK:se spaceship[pos] for igual a O em algum momento, ele vai parar a aplicação
do{
    console.log(spaceship[pos])

    if(spaceship[pos] == 'o'){
        break     //ele não pega o O
    }

    pos++;
}while(pos < spaceship.length)