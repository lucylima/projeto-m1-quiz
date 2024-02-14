let score = 0;
let fase = 0;
let questaoElemento = document.getElementById('texto-questao');
let alternativasElemento = document.querySelectorAll('.alternativa');
let imagemElemento = document.getElementById('imagem-questao');
let jogarNovamente = document.querySelector(".botao-jogar-novamente");
let questaoAtual = document.getElementById('n-questao');
let content = document.querySelector('.container-quiz');
let contentFinish = document.querySelector('.respostas');
let submitRespostaBtn = document.getElementById('submit-resposta');

import questoes from "./bancoPerguntas.js";
 
function mostrarPerguntas() {
    questaoAtual.textContent = `Questão ${fase + 1}/${questoes.length}`;
    const item = questoes[fase];
    questaoElemento.textContent = item.questao;
    imagemElemento.style.backgroundImage = `url(${item.imagem})`;
    alternativasElemento.forEach((element, index) => {
        element.children[0].id = `resposta${index + 1}`;
        element.children[1].textContent = item.alternativas[index].alternativa;
    });
    submitRespostaBtn.disabled = false;
    jogarNovamente.classList.add('none');
}

function validarResposta(resposta) {
    let respostaCorreta = questoes[fase].alternativas.find(alternativa => alternativa.certo === true).alternativa;
    if (resposta === respostaCorreta){
        score++;
        if (fase < questoes.length - 1) {
            fase++;
            mostrarPerguntas();
        } else {
            mostrarResultado(score);
        }
        } else {
            fase = 0;
            mostrarPerguntas();
        }
}

function mostrarResultado(score) {
    const numeroAcertos = document.getElementById('resultado');
    numeroAcertos.textContent = `Você acertou ${score} de ${questoes.length} perguntas.`;
    content.style.display = "none";
    contentFinish.style.display = "block";
}

jogarNovamente.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    fase = 0;
    score = 0;
    mostrarPerguntas();
};

submitRespostaBtn.addEventListener('click', () => {
    console.log('funcionando');
    let respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (respostaSelecionada) {
        validarResposta(respostaSelecionada.nextElementSibling.textContent);
    } else {
        alert("Selecione uma resposta antes de enviar."); 
    }
    respostaSelecionada.checked = false;
});

mostrarPerguntas();
