// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('.img');
imagens.forEach(function(item){
    console.log(item);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('img[src^="assets/img/imagem"]');
imagens2.forEach(function(item){
    console.log(item);
});

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(function(item){
    console.log(item);
});
// Selecione o primeiro h2 dentro de .animais-descricao
const titulo2 = document.querySelector('.animais-descricao h2');
console.log(titulo2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length-1]);

// Mostre no console cada parágrado do site
paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);
itensMenu.forEach((item)=> {
   item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item)=> {
   item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens3 = document.querySelectorAll('img');
console.log(imagens3);
imagens3.forEach((item)=> {
    const possuiAtributo = item.hasAttribute('alt');
    console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com');

// Verifique a distância da primeira imagem
// em relação ao topo da página 
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    const imagens4 = document.querySelectorAll('img');
    console.log(imagens4);

    let soma = 0;
    imagens4.forEach(img => {
        soma = soma + img.offsetWidth;
    });
    console.log(soma);
}

window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links2 = document.querySelectorAll('a');
console.log(links2);'----------'

links2.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth > 48 && linkHeight > 48){
        console.log('possui acessibilidade');
    } else{
        console.log('não possui acessibilidade');
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if (browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    this.classList.add('ativo');
}

linksInternos.forEach((link) =>{
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(this);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos2 = document.querySelectorAll('body *');

function handleElemento2(event){
    this.remove();
}

todosElementos2.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento2);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
//function handleClickT(event){
   //  if(event.key === 't'){

    //}
//}

//window.addEventListener('keydown', handleClickT);


