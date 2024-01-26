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
    obterPronomeUsuario();
    while (!nomeUsuario.trim()) {
      alert("Nome de usuário não pode estar vazio.");
      nomeUsuario = prompt("Por favor, digite um nome válido:");
    }
  
    localStorage.setItem("nomeUsuario", nomeUsuario);
  
    exibirNomeUsuario(nomeUsuario, pronome);
  }

  const obterPronomeUsuario = () => {
    let p = prompt("digite seu pronome\nEla\nEle");
    let pronome;
    if (p == 'ela'){
      pronome = "a";
    }else if(p == "ele"){
      pronome = "o";
    }else if (p == null && p != "ele", "ela" )
    {
    p = prompt("digite seu pronome\nEla\nEle");
    }
    return pronome;
  }
  
  function exibirNomeUsuario(nome,m) {
    let nomeUsuarioTag = document.getElementById("nomeUsuario");
    nomeUsuarioTag.textContent = "Bem-vind" + m + " " + nome;
  }

  