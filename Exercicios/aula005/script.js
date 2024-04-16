var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames2.forEach(function(item) {
  console.log(item);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

brasilCampeao = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let ganhou; ganhou < brasilCampeao.length; ganhou++){
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[ganhou]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var fruta = frutas[frutas.length - 1];

