document.addEventListener("DOMContentLoaded", function() {
    let nomeArmazenado = localStorage.getItem("nomeUsuario");
  
    if (nomeArmazenado) {
  let criarNovoUsuario = confirm("Você deseja criar um novo usuário?");
  if (criarNovoUsuario) {
    localStorage.removeItem("nomeUsuario");
        obterNomeUsuario();
      } else {
        exibirNomeUsuario(nomeArmazenado);
      }
    } else {
       obterNomeUsuario();
    }
  });
  
  function obterNomeUsuario() {
    let nomeUsuario = prompt("Digite seu nome:");
    while (!nomeUsuario.trim()) {
      alert("Nome de usuário não pode estar vazio.");
      nomeUsuario = prompt("Por favor, digite um nome válido:");
    }
  
    localStorage.setItem("nomeUsuario", nomeUsuario);
  
    exibirNomeUsuario(nomeUsuario, 'e');
  }

  function exibirNomeUsuario(nome) {
    let nomeUsuarioTag = document.getElementById("nomeUsuario");
    nomeUsuarioTag.textContent = "Bem-vinda" + " " + nome;
  }

  