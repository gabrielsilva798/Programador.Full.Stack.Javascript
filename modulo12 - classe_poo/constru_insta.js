//CONSTRUTOR, por padrão já existe um vazio, igual o java
class SpacialStation {
    //CONSTRUCTOR é igual o THIS or SUPER
    constructor(name, plataformQtd = 40){ //poso colocar um valor DEAFLT igual nas funções
        this.name = name; //colocando aqui, não preciso criar o objeto fora
        this.plataformQtd = plataformQtd;
    }
}

//INSTANCIANDO a classe criada a cima
let observatory = new SpacialStation("Observatório"); //posso mudar o 2º parâmetro, se eu quiser

//ele imprime parecido um JSON, no java ele imprimiria o endereço do objeto
console.log(observatory)