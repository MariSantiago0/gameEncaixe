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


//perguntas das medidas
alert("Duplique o tamanho do gato");

function questions(answer){
let takeAnswer = answer.keyCode;
if (takeAnswer == )
}
