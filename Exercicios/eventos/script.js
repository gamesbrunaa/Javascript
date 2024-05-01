const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

const img2 = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img2.addEventListener('click', callback); // 🚀
img2.addEventListener('click', callback()); // undefined
img2.addEventListener('click', function() {
  console.log('Clicou');
})
img2.addEventListener('click', () => {
  console.log('Clicou');
})

const img3 = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img3.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

const img4 = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img4.addEventListener('click', callback);

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
