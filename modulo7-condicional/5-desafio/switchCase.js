let distanciaAnosLuz = prompt("Qual a distância em anos luz: ")

let opicoes = prompt("1- Parsec(PC)\n2- Unidade astronômica(AU)\n3- Quilômetros(KM)\n\n Qual opição deseja escolher?\n\n Digite o número da opção desejada ")

let valorConvertido;
let unidadeEscolha;

switch(opicoes) {
    case "1":
        unidadeEscolha = "Parsec"
        valorConvertido = distanciaAnosLuz * 0.306601
        break
    case "2":
        unidadeEscolha = "Unidade astrônimica"
        valorConvertido = distanciaAnosLuz * 63241.1
        break
    case "3":
        unidadeEscolha = "Quilômetros"
        valorConvertido = distanciaAnosLuz * 9.5*Math.pow(10,2)
        break
    default:
        unidadeEscolha = "Unidade Invalida"
        valorConvertido = "Conversão fora do escopo"
}

alert("Distância em anos luz: " + distanciaAnosLuz + "\n" + unidadeEscolha + ": " + valorConvertido);