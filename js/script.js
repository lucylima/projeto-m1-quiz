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
}

function exibirNomeUsuario(saudacao, nome) {
  let nomeUsuarioTag = document.getElementById("nomeUsuario");
  nomeUsuarioTag.textContent = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
}
solicitarPronome();