let score = 0; // inicializa com 0
let fase = 0; // começa na fase 1

import { questoes } from "bancoPerguntas";

function mostrarPerguntas() { // ! atenção na renderização 
  
  document.querySelectorAll(".alternativa").forEach((item) => {
    item.addEventListener("click", proximaPergunta);
  });
};

function validar() { // ! validação da resposta

}

function calcularPontuacao(score) { // * feito
  // const aleatorioNumero = Math.floor(Math.random() * 100) + 1; 

  score++;
  
}

function mostrarResultado(score) { 
  // TODO: mostrar resultado apenas no final depois da última fase
  const numeroAcertos = document.getElementById('resultado');
  numeroAcertos.innerHTML = `Você acertou ${score} de ${bancoPerguntas.length} perguntas.`;
}

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





