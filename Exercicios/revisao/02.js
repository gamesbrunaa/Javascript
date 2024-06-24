// Retorne o url da página atual utilizando o objeto window
const url = window.document.URL;
console.log('O url da página é: ', url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 
const largura = window.innerWidth;
console.log(largura);

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
imagens.forEach((imagem) =>{
    console.log(imagem);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('[src^="img/imagem"]');
imagens2.forEach((imagem) =>{
    console.log(imagem);
})

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
linksInternos.forEach((link) =>{
    console.log(link);
})

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroItem = document.querySelector('.animais-descricao h2');
console.log(primeiroItem);

// Selecione o último p do site
const ultimoItem = document.querySelector('p:last-child');
console.log(ultimoItem);

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafos = document.querySelectorAll('p');
const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach((item) =>{
    console.log(item);
    console.log(item.innerHTML);
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));

// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu ul li');
const menuArray = Array.from(menu);

menuArray.forEach(item =>{
    item.classList.add('ativo')
}); 

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt
imgs.forEach((item) => {
    let atributo = item.getAttribute('alt');
    console.log(atributo);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('[href^="https://"]');
linkExterno.setAttribute('src', 'github.com');
console.log(linkExterno);

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgsArray = Array.from(imgs);

let soma = 0;
imgsArray.forEach(img =>{
    let rect = img.getBoundingClientRect();
    let largura = rect.width;
    soma = soma + largura;
});

console.log(largura);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
linksInternos.forEach(link =>{
    let linksRect = link.getBoundingClientRect();
    let largura = linksRect.width;
    let altura = linksRect.height;
    if(largura >= 48 && altura >= 48)
        console.log(true);
    else
        console.log(false);
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais

