// Agora que entendemos como criar e acessar objetos em Javascript, vamos fazer um exercício para testar nossas habilidades.

// Crie um objeto chamado "carro" que tenha as seguintes propriedades:

// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)
// Em
// seguida, crie um método chamado "acelerar" que receba um número como
// argumento e aumente a velocidade atual do carro por esse número.
// Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.

class Carro{
    constructor(marca , modelo , ano , cor , velocidadeMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }

    acelerar(velocidadeDesejada) {
        if(velocidadeDesejada <= this.velocidadeMax){          
            this.velocidadeAtual = velocidadeDesejada;
            return "Velocidade atual " + this.velocidadeAtual;

        }else if(velocidadeDesejada >= this.velocidadeAtual){
            return "O valor de aceleração é menor que a velocidade atual do carro, se quiser desacelerar use a função 'desacelerar'";
        }
        else{
            return "A velocidade máxima desse carro é " + this.velocidadeMax;
        }
    }
    desacelerar(velocidadeDesejada){
        if(velocidadeDesejada <= this.velocidadeAtual){
            return "velocidade não permitida! A velocidade não condiz com a realidade"
        }else{
            this.velocidadeAtual = velocidadeDesejada;
            return "A velocidade diminuiu para " + this.velocidadeAtual;
        }
    }
}

var Gol = new Carro("Volkswagen","Gol G7","2023","Branco","220");
var Uno = new Carro("Fiat", "Uno Fire", "2012","Branco","220");
let carros = [Gol,Uno];
console.log(carros);


//Criando ARRAY de objetos 'carros' 
// let carros = [];

// carros.push(    
//     new Carro("Volkswagen","Gol G7","2023","Branco","220"),
//     new Carro("Fiat", "Uno Fire", "2012","Branco","220")
// );

// console.log(carros);



