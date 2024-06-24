// Declarar uma variável com o seu nome
var nome = 'Bruna';

// Declarar uma variável com a sua idade
var idade = 23;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'Creme de Galinha';

// Declarar 5 variáveis diferentes sem valores
var variavel1,
    variavel2,
    variavel3,
    variavel4,
    variavel5;

// Declare uma variável contendo uma string
var contemString = "contemString";

// Declare uma variável contendo um número dentro de uma string
var contemNumeroString = "contem string" + 1 + "número";

// Declare uma variável com a sua idade
var idade2 = 23;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome1 = 'bruna';
var sobrenome = 'veloso';
var nomeCompleto = nome1 + sobrenome;

// Coloque a seguinte frase em uma variável: It's time
var frase = "it's time!";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof(nome1));

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var frase2 = 'teste';
var numero = 10;
var fraseNumero = frase - numero;
console.log(fraseNumero);
console.log(+frase2);

// Somar a string '200' com o número 50 e retornar 250
var string200 = '200';
var numero50 = 50;
var total250 = +string200 + 50;
console.log(total250);

// Incremente o número 5 e retorne o seu valor incrementado
var numero5 = 5;
numero5++;
console.log(numero5);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = +peso.replace('kg', '') / 2; // NaN (Not a Number)
console.log(pesoPorDois);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeP = 50;
if(idade < idadeP){
    console.log('É menor!');
} else if(idade > idadeP){
    console.log('É maior');
} else{
    console.log('É igual!');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //Falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Cão
} else {
  console.log('Falso');
}

// Crie uma função para verificar se um valor é Truthy
function conferirValor(valor){
    if(valor){
        console.log('É verdadeiro!');
    } else{
        console.log('É falso!');
    }
}

conferirValor(20);
conferirValor();

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
    total = lado + lado + lado + lado;
    return total;
}

console.log(perimetro(20));
console.log(perimetro(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto2(nome, sobrenome){
    return nome + sobrenome;
}

console.log(nomeCompleto2('bruna', ' veloso'));

// Crie uma função que verifica se um número é par
function ehPar(numero){
    if (numero % 2 === 0){
        console.log('É par!');
    }else{
        console.log('É impar!');
    }
}

ehPar(10);
ehPar(5);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado){
    return(typeof(dado));
}

console.log(tipoDado('bruna'));
console.log(tipoDado(3));
console.log(tipoDado(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
//document.addEventListener('scroll', function(){
  ///  console.log('bruna');
//});


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}

function jaVisitei(paisesVisitados) {
    console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}

precisoVisitar(20);
jaVisitei(20);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadoPessoais = {
    nome: 'bruna',
    sobrenome: ' veloso',

    nomeCompleto(nome, sobrenome){
        return this.nome + this.sobrenome;
    }
}

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadoPessoais.nomeCompleto());

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

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: '10',

    latiu(verHomem){
        if(verHomem){
            return 'Latiu!';
        }
    }
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < anos.length; i++){
    console.log(`O brasil ganhou a copa de ${anos[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i++){
    console.log(`${frutas[i]}`);
    if(frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var fruta2 = frutas[frutas.length -1 ];
console.log(fruta2);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'dar credito': 'não dar credito';
console.log(darCredito);

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}

//console.log(cor, marca, portas);
//marca é const e portas é let e esses tipos não vazam do bloco de código {}
  
// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));
  
// O que fazer para total retornar 500?
var numero1 = 50;

for(let numero1 = 0; numero1 < 10; numero1++) {
  console.log(numero1);
}

const total2 = 10 * numero1;
console.log(total2);
//trocar o var do for para let para a variavel só incrementar dentro do bloco {}
  



