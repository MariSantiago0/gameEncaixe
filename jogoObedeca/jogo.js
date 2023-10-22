
// Linha de código para arrastar a img para os lados e de cima para baixo
const dragElement = document.getElementById('element');
let isDragging = false;
let offsetX, offsetY;

//verificação do arrasto da img
dragElement.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - dragElement.getBoundingClientRect().left;// verifica onde vc apertou na img para calcular onde vc pode levar ela, representa a linha horizontal em pixels (e.clientX)
  offsetY = e.clientY - dragElement.getBoundingClientRect().top;
  dragElement.style.cursor = 'grabbing';
});

//onde a img é movida
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.clientX - offsetX;// subtraindo a posição do cursor do mouse pela posição inicial do elemento
    const y = e.clientY - offsetY;

    dragElement.style.left = x + 'px';
    dragElement.style.top = y + 'px';
  }
});

// é acionado quando o usuário solta o botão do mouse após clicar em algum elemento
document.addEventListener('mouseup', () => {
  isDragging = false;
  dragElement.style.cursor = 'grab';
});

// verifica se a img esta solta ou não
document.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    dragElement.style.cursor = 'grab';
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

document.addEventListener("keydown", function (event) {
  if (event.key === "k" || event.key === "K") {
  window.location.reload();
}});


