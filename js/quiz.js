document.addEventListener("DOMContentLoaded", function() { // ao carregar a pagina
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", calculateScore);
  renderQuestions();
});

divPergunta.addEventListener('click', checarResposta); 

const questionsData = [ // ! adicionar nossas perguntas
    // * questionsData é um array
  { // *as questoes sao objetos
    // *  id: 1
    questionImage: '/caminho/sabe',
    question: "Qual é a capital do Brasil?", // * objeto da pergunta que é uma string
    options: ["Brasília", "Rio de Janeiro", "São Paulo"], // * array 
    correctAnswer: "Brasília"
  },
  {
    question: "Qual é o maior planeta do nosso sistema solar?",
    options: ["Terra", "Júpiter", "Marte"],
    correctAnswer: "Júpiter"
  },
];

// questionsData[0].correctAnswer; acessar as questoes e depois acessar as propriedades


function renderQuestions() { // ! atenção na renderização
  const quizContainer = document.getElementById("quiz-container"); // cria uma div como container do quiz

  questionsData.forEach((question, index) => {
    const questionDiv = document.createElement("div"); //cria porem nao exibe <div> </div>
    questionDiv.classList.add("question"); //adiciona uma classe ao objeto 
    questionDiv.id = `question${index + 1}`; //adiciona um id  <div class="question" id="question0">

    const questionText = document.createElement("p"); // <p> pergunta </p>
    questionText.textContent = question.question; // define o conteudo do <p> com o conteudo do objeto questao
    questionDiv.appendChild(questionText); // adiciona a pergunta na div questao
    
    question.options.forEach((option, optionIndex) => { // perguntas
      const label = document.createElement("label"); // cria um <label>
      const input = document.createElement("input"); //  cria um <input>
      input.type = "radio"; // muda o tipo dele <input type="radio"
      input.name = `q${index + 1}`; //  <input name="">
      input.value = option.toLowerCase(); // Usar a opção em minúsculas como valor <input value=""
      label.appendChild(input); // adiciona input 
      label.appendChild(document.createTextNode(` ${option}`)); // cria um texto no tag
      questionDiv.appendChild(label); // cria a <label>
    });

    quizContainer.appendChild(questionDiv); // cria uma div dentro do container quiz
  });
}

function calculateScore() { // TODO: mudar para outro nome mais inuitivo
  const questions = document.querySelectorAll('.question'); // seleciona todos os elementos com a classe .question q eh uma div
  let score = 0; // inicializa com 0

  questions.forEach((question, index) => { // seleciona todas as divs com question
    const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`); //checa qual esta com a pseudo classe marcado :checked
    
    if (selectedAnswer) { // condição
      const userAnswer = selectedAnswer.value; //checa se o value é igual a opção correta 
      const correctAnswer = questionsData[index].correctAnswer.toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  });

  displayResult(score);
}

function displayResult(score) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `Você acertou ${score} de ${questionsData.length} perguntas.`;
}

renderQuestions();

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
      location.reload();
  }
}

function exibirNomeUsuario(saudacao, nome) {
  let nomeUsuarioTag = document.getElementById("nomeUsuario");
  nomeUsuarioTag.textContent = `${saudacao.charAt(0).toUpperCase() + saudacao.slice(1)}, ${nome}!`;
}

solicitarPronome();

const alertar = () => {
  alert('bom dia');
}
let botao = document.getElementById('botao');
botao.addEventListener('click', () => {
  alert('oi');
});


