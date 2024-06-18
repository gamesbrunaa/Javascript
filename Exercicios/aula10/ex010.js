function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}
  
const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

function Dom(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
      element.classList.add(classe);
    };
}
  
const lista = new Dom('ul');
lista.ativo('ativo');
  
const lastLi = new Dom('li:last-child');
lastLi.ativo('ativo');
  
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
      console.log(this.nome + ' andou');
    }
}
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  const pessoa1 = new Pessoa('joao', 20);
  const pessoa2 = new Pessoa('maria', 25);
  const pessoa3 = new Pessoa('bruno', 15)
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;

    this.addClass = function(classe){
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }

    this.removeClass = function(classe){
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const listaLi = new Dom('li');
const listaUl = new Dom('ul');

listaLi.addClass('ativar');
listaUl.addClass('ativar-ul');

listaUl.removeClass('ativar-ul');