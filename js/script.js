document.addEventListener("DOMContentLoaded", function() {
    var nomeArmazenado = localStorage.getItem("nomeUsuario");
  
    if (nomeArmazenado) {
      var criarNovoUsuario = confirm("Você deseja criar um novo usuário?");
  
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
    var nomeUsuario = prompt("Digite seu nome:");
  
    while (!nomeUsuario.trim()) {
      alert("Nome de usuário não pode estar vazio.");
      nomeUsuario = prompt("Por favor, digite um nome válido:");
    }
  
    localStorage.setItem("nomeUsuario", nomeUsuario);
  
    exibirNomeUsuario(nomeUsuario);
  }
  
  function exibirNomeUsuario(nome) {
    var nomeUsuarioTag = document.getElementById("nomeUsuario");
    nomeUsuarioTag.textContent = "Bem-vindo, " + nome + "!";
  }