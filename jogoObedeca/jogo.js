
const canvas =  document.getElementById('element');
        const ctx = canvas.getContext('2d');

        // Carregando a imagem
        const image = new Image();
        image.src = 'pinkie.png';

        // Posição inicial da imagem
        let x = 0;
        let y = 0;

        // Quando a imagem estiver carregada, desenhe-a no Canvas
        image.onload = function () {
            ctx.drawImage(image, x, y);
        };

        // Função para apagar o Canvas
        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Função para mover a imagem para a esquerda
        function moveLeft() {
            clearCanvas();
            x -= 10; // Altere a quantidade que desejar
            ctx.drawImage(image, x, y);
        }

        // Função para mover a imagem para a direita
        function moveRight() {
            clearCanvas();
            x += 10; // Altere a quantidade que desejar
            ctx.drawImage(image, x, y);
        }

        // Função para mover a imagem para cima
        function moveUp() {
            clearCanvas();
            y -= 10; // Altere a quantidade que desejar
            ctx.drawImage(image, x, y);
        }

        // Função para mover a imagem para baixo
        function moveDown() {
            clearCanvas();
            y += 10; // Altere a quantidade que desejar
            ctx.drawImage(image, x, y);
        }

        // Event listeners para as teclas de seta
        window.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') {
                moveLeft();
            } else if (e.key === 'ArrowRight') {
                moveRight();
            } else if (e.key === 'ArrowUp') {
                moveUp();
            } else if (e.key === 'ArrowDown') {
                moveDown();
            }
        });

// Linha de código para rotacionar, aumentar e diminuir a img 
let rotationAngle = 0;
let scaleValue = 1; // Valor inicial da escala

document.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    rotationAngle += 90;
  } else if (e.key === "a" || e.key === "A") {
    scaleValue *= 2; // Aumenta a escala para 2x
  } else if (e.key === "d" || e.key === "D") {
    // Verifica se a escala não se tornará negativa
    if (scaleValue > 0.5) {
      scaleValue *= 0.5; // Diminui a escala para 0.5x
    }
  }

  dragElement.style.transform = `rotate(${rotationAngle}deg) scale(${scaleValue})`;
});


//perguntas
let perguntaAtual = 1; // Inicialmente, a primeira pergunta está sendo exibida

function exibirMensagemParabens() {
 let perguntasDiv = document.getElementById("perguntas");
 let barra = document.getElementById("barra-conclusao");
 if (perguntaAtual === 1 || perguntaAtual === 2 || perguntaAtual === 3){
  perguntasDiv.innerHTML = "Parabéns! Você acertou!";
 }
 else if(perguntaAtual === 4) {
  perguntasDiv.innerHTML = "Parabéns, você acertou todas! Reinicie o jogo apertanto K";
  barra.src = "imgs/barra5.jpeg";
 }
}


function proximaPergunta() {
  let perguntasDiv = document.getElementById("perguntas");
  let barra = document.getElementById("barra-conclusao");
  perguntaAtual++;
  
  // Verifica qual é a próxima pergunta com base no número da pergunta atual
  if (perguntaAtual === 2) {
  barra.src = "imgs/barra2.jpeg";
  perguntasDiv.innerHTML = "Diminua o tamanho da pinkie (D)";
  }
  else if (perguntaAtual === 3) {
  barra.src = "imgs/barra3.jpeg";
  perguntasDiv.innerHTML = "Vire a pinkie de cabeça para baixo (R)";
  }
  else if (perguntaAtual === 4) {
    barra.src = "imgs/barra4.jpeg";
    perguntasDiv.innerHTML = "Mova a pinkie";
  }
}

let contadorTecla = 0;

// respostas para as perguntas
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
   exibirMensagemParabens();
   setTimeout(proximaPergunta, 2000);
}
else if (event.key === 'd' || event.key === "D") {
  exibirMensagemParabens();
   setTimeout(proximaPergunta, 2000);
}
else if (event.key === 'r' || event.key === "R") {
  contadorTecla++;
  if (contadorTecla === 2){
    exibirMensagemParabens();
    setTimeout(proximaPergunta, 2000);
  }
}
});

element.addEventListener("drag", function(event) {
  exibirMensagemParabens();
  setTimeout(proximaPergunta, 2000);
});

// função para reiniciar o jogo quando a tecla K for pressionada
document.addEventListener("keydown", function (event) {
  if (event.key === "k" || event.key === "K") {
  window.location.reload();
}});


