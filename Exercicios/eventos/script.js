const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});

const imgs2 = document.querySelectorAll('img');

imgs2.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

const imgs3 = document.querySelectorAll('img');

imgs3.forEach((item) => {
  console.log(item);
});

const imgs4 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs4.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs4.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs4.forEach(() => {
  console.log(i++);
});

const imgs5 = document.querySelectorAll('img');

imgs5.forEach(item => 
  console.log(item)
);

imgs5.forEach(item => console.log(item));

