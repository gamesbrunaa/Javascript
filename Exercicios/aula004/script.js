var pessoa = {
    nome: 'bruna',
    idade: 23,
    profissao: 'desenvolvedora',
    possuiFaculdade: true,
}

pessoa.nome;
pessoa.idade;
pessoa.profissao;
pessoa.possuiFaculdade;

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.perimetro(5));
console.log(quadrado.area(5));

console.log(Math.random());

//get .
//set =

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'bruna',
    sobrenome: 'veloso',
    instagram: '@gamesbrunaa',
    mostrar(){
        console.log(this.nome, this.sobrenome);
    },
}

dadosPessoais.mostrar();

// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
homem = true;
var cachorro = {
    raça: 'labrador',
    cor: 'preto',
    ver(homem){
        if(homem){
            console.log('Latir');
        }
    }
}

cachorro.ver(homem);
  
// nomeie 3 propriedades ou métodos de strings

var nome = 'bruna';
console.log(nome.charAt());
console.log(nome.length);
console.log(nome.toLocaleUpperCase());

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener;
btn.appendChild;
btn.innerHTML;
btn.id;
btn.localName;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//clipboard.js -> https://www.treinaweb.com.br/blog/clipboard-js-copiar-e-colar-com-javascript
