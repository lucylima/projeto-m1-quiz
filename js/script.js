<<<<<<< HEAD
=======
function solicitarPronome() {
  let pronome = prompt("Por favor, digite seu pronome (ele/ela):");

  if (pronome === null) {
      location.reload();
      return;
  }

  pronome = pronome.toLowerCase();
  let nome = prompt("Agora, digite seu nome:");

  if (pronome === 'ele') {
      exibirNomeUsuario('bem-vindo', nome);
  } else if (pronome === 'ela') {
      exibirNomeUsuario('bem-vinda', nome);
  } else {
      alert("Pronome inválido. Por favor, use 'ele' ou 'ela'.");
    }
    location.reload();
} 

function exibirNomeUsuario(saudacao, nome) {
  let nomeUsuarioTag = document.getElementById("nomeUsuario");
  nomeUsuarioTag.textContent = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
}

solicitarPronome();
>>>>>>> cdb2c0bea903602d37f0f5dde30528611974812d
