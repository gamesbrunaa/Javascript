function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const andre = new Pessoa('André', 28);
  
console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
  
Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
}
  
console.log(Pessoa.prototype); // retorna o objeto
  
// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
andre.andar();
andre.__proto__.andar();

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

[1,2,3].slice(); // existe
[1,2,3].from(); // não existe

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
      return true;
    }
  }
  
  Carro // Object
  Carro.marca // String
  Carro.preco // Number
  Carro.acelerar // Function
  Carro.acelerar() // Boolean
  Carro.marca.charAt // Function
  Carro.marca.charAt(0) // String

  