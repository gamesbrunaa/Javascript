// Crie uma função para verificar se um valor é Truthy

function conferirValor(valor){
    if (valor === 'Truthy') {
        return true
    } else{
        return false
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado + lado + lado + lado;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNome(nome, sobrenome){
    return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par

function ehPar(valor){
    resto = valor % 2;
    if (resto === 0){
        return 'É par!';
    } else{
        return 'Não é par!';
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
    return typeof(dado);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function (){ console.log('Bruna Veloso'); });

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);