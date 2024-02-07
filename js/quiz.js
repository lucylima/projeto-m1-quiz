let score = 0; // inicializa com 0
let fase = 0; // começa na fase 1
let questaoElemento = document.getElementById('texto-questao');
let alternativasElemento = document.querySelectorAll('.alternativa');
let imagemElemento = document.getElementById('imagem-questao');
let jogarNovamente = document.querySelector(".botao-jogar-novamente");
let questaoAtual = document.getElementById('n-questao');

import questoes from "./bancoPerguntas.js";

// questaoElemento.textContent = questoes[0].questao;

function mostrarPerguntas() { // ! atenção na renderização 
  questaoAtual.textContent = `Questão ${fase + 1}/${questoes.length}`;
  const item = questoes[fase];
  answers.innerHTML = "";
  questao.innerHTML = item.questao;
  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
};

function proximaPergunta() {
  questaoElemento.textContent = 'bom dia';
}

function validar() { // ! validação da resposta

}

function calcularPontuacao(score) { // * feito
  // const aleatorioNumero = Math.floor(Math.random() * 100) + 1; 
  score++;
  
}

function mostrarResultado(score) { 
  // TODO: mostrar resultado apenas no final depois da última fase
  const numeroAcertos = document.getElementById('resultado');
  numeroAcertos.innerHTML = `Você acertou ${score} de ${questoes.length} perguntas.`;
}

jogarNovamente.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  questaoAtual = 0;
  questaoCerta = 0;
  mostrarPerguntas();
};

mostrarPerguntas();

// function solicitarPronome() {
//   let pronome = prompt("Por favor, digite seu pronome (ele/ela):");
//   if (pronome === null) {
//       solicitarPronome();
//       return;
//   }

//   pronome = pronome.toLowerCase();
//   let nome = prompt("Agora, digite seu nome:");

//   if (pronome === 'ele') {
//       exibirNomeUsuario('bem-vindo', nome);
//   } else if (pronome === 'ela') {
//       exibirNomeUsuario('bem-vinda', nome);
//   } else {
//       alert("Pronome inválido. Por favor, use 'ele' ou 'ela'.");
//       solicitarPronome();
//   }
// }
// function exibirNomeUsuario(saudacao, nome) {
//   let nomeUsuarioTag = document.getElementById("nomeUsuario");
//   nomeUsuarioTag.textContent = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
// }
// solicitarPronome();





