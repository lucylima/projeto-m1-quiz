let score = 0;
let fase = 0;
let nome = localStorage.getItem('nome');
let questaoElemento = document.getElementById('texto-questao');
let alternativasElemento = document.querySelectorAll('.alternativa');
let imagemElemento = document.getElementById('imagem-questao');
let jogarNovamente = document.querySelector(".botao-jogar-novamente");
let questaoAtual = document.getElementById('n-questao');
let content = document.querySelector('.container-quiz');
let contentFinish = document.querySelector('.respostas');
let submitRespostaBtn = document.getElementById('submit-resposta');
let nomeElemento = document.getElementById('nome');
let resultado = document.querySelector('.container-resultado');
import questoes from "./bancoPerguntas.js";
 

function mostrarPerguntas() {
    resultado.style.display = 'none';
    questaoAtual.textContent = `Questão ${fase + 1}/${questoes.length}`;
    nomeElemento.textContent = nome;
    const item = questoes[fase];
    questaoElemento.textContent = item.questao;
    imagemElemento.style.backgroundImage = `url(${item.imagem})`;
    alternativasElemento.forEach((element, index) => {
        element.children[0].id = `resposta${index + 1}`;
        element.children[1].textContent = item.alternativas[index].alternativa;
    });
    submitRespostaBtn.disabled = false;
}

function validarResposta(resposta) {
    let respostaCorreta = questoes[fase].alternativas.find(alternativa => alternativa.certo === true).alternativa;
    if (resposta === respostaCorreta){
        score++;
        if (fase < questoes.length - 1) {
            fase++;
            mostrarPerguntas();
        } else {
            mostrarResultado();
        }
        } else {
            alert('Você errou!');
            fase = 0;
            mostrarPerguntas();
        }
}

function mostrarResultado() {
    const acertos = document.getElementById('resultado');
    resultado.style.display = 'flex';
    content.style.display = 'none';
    acertos.textContent = `Parabéns! Você acertou todas as perguntas.`;
}

jogarNovamente.onclick = () => {
    fase = 0;
    score = 0;
    content.style.display = 'flex';
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
