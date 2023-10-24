window.onload = function () {
    const canvas = document.getElementById("canvasGame");
    const ctx = canvas.getContext("2d");

    // Posição da imagem original
    let x = 100;
    let y = 100;

    // Tamanho da imagem original
    let imgWidth = 100;
    let imgHeight = 150;

    // Função para desenhar a imagem original no canvas
    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(x + imgWidth / 2, y + imgHeight / 2);
        ctx.rotate((angulo % 360) * (Math.PI / 180));
        ctx.drawImage(image, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
        ctx.restore();
    }

    // Adicionar um ouvinte de evento de teclado para mover a imagem original
    document.addEventListener("keydown", function (e) {
        if (e.key === 'ArrowUp') {
            y -= 10;
        } else if (e.key === 'ArrowDown') {
            y += 10;
        } else if (e.key === 'ArrowLeft') {
            x -= 10;
        } else if (e.key === 'ArrowRight') {
            x += 10;
        }
        drawCanvas();
    });

    let angulo = 0;

    // Rotação quando a tecla "R" é pressionada
    document.addEventListener('keydown', function (e) {
        if (e.key === 'r' || e.key === 'R') {
            angulo += 90;
            drawCanvas();
        }
    });

    // Alterar o tamanho e a posição da imagem original
    document.addEventListener('keydown', function (e) {
        if (e.key === 'a' || e.key === 'A') {
            imgWidth *= 2;
            imgHeight *= 2;
            drawCanvas();
        } else if (e.key === 'd' || e.key === 'D') {
            imgWidth /= 2;
            imgHeight /= 2;
            drawCanvas();
        } else if (e.key === "t" || e.key === "T") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            x = 200;
            y = 200;
            drawCanvas();
        }
    });

    // imagem para ser manipulada
    const image = new Image();
    image.src = 'imgs/dash.png';

    // Desenhar a imagem original no canvas
    image.onload = function () {
        drawCanvas();
    };

    // Adicionar um ouvinte de evento de teclado para criar um "clipping path" na bola azul
    document.addEventListener("keydown", function (e) {
        if (e.key === "e" || e.key === "E") {
            createClippingPath();
        }
    });

    function createClippingPath() {
        // Definir um caminho de recorte como um círculo
        const centerX = x + imgWidth / 2;
        const centerY = y + imgHeight / 2;
        const radius = 50; // Raio do círculo de recorte (ajuste conforme necessário)

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.clip();

        // Desenhar uma bola azul (ou um círculo azul) dentro do caminho de recorte
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();

        // Limpar o caminho de recorte
        ctx.restore();
    }

    // Perguntas
    let perguntaAtual = 1; // Inicialmente, a primeira pergunta está sendo exibida

    function exibirMensagemParabens() {
        let perguntasDiv = document.getElementById("comandos");
        if (perguntaAtual === 1 || perguntaAtual === 2 || perguntaAtual === 3 || perguntaAtual === 4 || perguntaAtual === 5 || perguntaAtual === 6 || perguntaAtual === 7 || perguntaAtual === 8) {
            perguntasDiv.innerHTML = "Parabéns! Você acertou!";
        } else if (perguntaAtual === 9) {
            perguntasDiv.innerHTML = "Parabéns, você acertou todas! Reinicie o jogo apertando K";
        }
    }

    function proximaPergunta() {
        let perguntasDiv = document.getElementById("comandos");
        perguntaAtual++;

        // Verifica qual é a próxima pergunta com base no número da pergunta atual
        if (perguntaAtual === 2) {
            perguntasDiv.innerHTML = "Diminua o tamanho da Rainbow (D)";
        } else if (perguntaAtual === 3) {
            perguntasDiv.innerHTML = "Vire a Rainbow de cabeça para baixo (R)";
        } else if (perguntaAtual === 4) {
            perguntasDiv.innerHTML = "Mova a Rainbow para a esquerda";
        } else if (perguntaAtual === 5) {
            perguntasDiv.innerHTML = "Mova a Rainbow para a direita";
        } else if (perguntaAtual === 6) {
            perguntasDiv.innerHTML = "Mova a Rainbow para cima";
        } else if (perguntaAtual === 7) {
            perguntasDiv.innerHTML = "Mova a Rainbow para baixo";
        } else if (perguntaAtual === 8) {
            perguntasDiv.innerHTML = "Aperte 'T' para fazer a Rainbow fazer o movimento de Translação";
        } else if (perguntaAtual === 9) {
            perguntasDiv.innerHTML = "Aperte 'E' para visualizar um clipping path";
        }
    }

    let contadorTecla = 0;

    // Respostas para as perguntas
    document.addEventListener("keydown", function (event) {
        if (event.key === "a" || event.key === "A") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (event.key === 'd' || event.key === "D") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (event.key === 't' || event.key === "T") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (event.key === 'r' || event.key === "R") {
            contadorTecla++;
            if (contadorTecla === 2) {
                exibirMensagemParabens();
                setTimeout(proximaPergunta, 2000);
            }
        }
    });

    // Respostas para as perguntas de movimento
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (e.key === "ArrowRight") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (e.key === "ArrowUp") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } else if (e.key === "ArrowDown") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        }
        else if (event.key === 'e' || event.key === "E") {
            exibirMensagemParabens();
            setTimeout(proximaPergunta, 2000);
        } 
    });

    // Reiniciar o jogo
    document.addEventListener("keydown", function (e) {
        if (e.key === "k" || e.key === "K") {
            window.location.reload();
        }
    });
};
