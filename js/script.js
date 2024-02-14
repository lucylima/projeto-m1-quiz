function solicitarInformacao() {
  let pronome = prompt("Por favor, digite seu pronome (ele/ela):");
  pronome = pronome.toLowerCase();
  
  let nome = prompt("Agora, digite seu nome:");
  if(nome == ''){while(nome == ''){ nome = prompt("Por favor!, digite seu nome");}}
 
  switch(pronome){
    case 'ele':
      exibirNomeUsuario('Bem-vindo', nome);
    break;

    case 'ela':
      exibirNomeUsuario('Bem-vinda', nome);
      break;

    default:
      exibirNomeUsuario('Olá', nome);
  }
} 

function exibirNomeUsuario(saudacao, nome) {
  let nomeUsuarioTag = document.getElementById("nomeUsuario");
  nomeUsuarioTag.textContent = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
}

solicitarInformacao();
