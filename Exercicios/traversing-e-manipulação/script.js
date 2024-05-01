const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

const lista2 = document.querySelector('.animais-lista');

lista2.previousElementSibling; // elemento acima
lista2.previousSibling; // node acima

lista2.firstChild; // primeiro node child
lista2.childNodes; // todos os node child

const lista3 = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

const titulo3 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo3;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo3.cloneNode(true);
const contato2 = document.querySelector('.contato');
contato2.appendChild(cloneTitulo);
