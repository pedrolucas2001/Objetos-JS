// 1) crie um sistema loja onde tem como atributos:
// nome;
// localidade;
// marca;
// dono;
// produtos;

// cadastrarProdutos();
// removerProdutos();

// *sendo que a função possa manipular a lista de produtos


class Loja{
    constructor(nome,localidade,dono){
        this.nomeLoja = nome;
        this.localidade = localidade;
        this.dono = dono;
        this.produtos = [];
    }

    cadastrarProduto(nome,tipo,cor){
        class Produtos{
            constructor(nome,tipo,cor){
                this.nomeProduto = nome;
                this.tipo = tipo;
                this.cor = cor;
            }
        }
        this.produtos.push(new Produtos(nome,tipo,cor));
    }

    listarProdutos(){
        console.log(this.produtos);
    }

    removerProduto(id){
        this.produtos.splice(id,1)
    }
}




var centauro = new Loja("Centauro","Taguatinga","Pedro");
var netshoes = new Loja("Netshoes","Taguatinga","Lucas");
var nike = new Loja("Nike","Taguatinga","João");

centauro.cadastrarProduto("Camisa Barcelona","Futebol","Azul e vermelho");
centauro.cadastrarProduto("Bola","Futebol","Vermelho");
centauro.cadastrarProduto("Chuteira","Futebol","Azul");
centauro.cadastrarProduto("Camisa Real Madrid","Futebol","Branca");
centauro.cadastrarProduto("Bola","Vôlei","Verde");
centauro.cadastrarProduto("Short","Futebol","Preto");
centauro.cadastrarProduto("Camisa NBA","Basquete","Preto e branco");








































// 2) faça uma página de cadastramento de filmes onde o usuario possa salvar um filme e suas informações como nome, descrição,data, diretor e categoria e liste ela de alguma forma em algum elemento HTML!


