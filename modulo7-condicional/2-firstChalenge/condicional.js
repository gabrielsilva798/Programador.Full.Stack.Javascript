let nome = prompt("Qual seu nome? ");

let velocidade = 0;

let velocidadeInicial = prompt("Qual velocidade gostaria de acelerar a nave?");

let confirmacao = confirm("Velocidade da nave indo para " + velocidadeInicial + "km/s?");

while (confirmacao == false) {
    velocidadeInicial = prompt("Qual velocidade gostaria de acelerar a nave?");
    confirmacao = confirm("Velocidade da nave indo para " + velocidadeInicial + "km/s?");
}

velocidade = velocidadeInicial;

if(velocidade <= 0 || velocidade == null) {
    alert("Nave está parada. Considere partir e aumente a velocidade")
} else if (velocidade < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocidade < 80) {
    alert("Parece uma boa velocidade para manter")  
} else if (velocidade < 100) {
    alert("Velocidade alta, considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automâtico forçado")
}