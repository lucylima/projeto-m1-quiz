export default [     
    // ! adicionar nossas perguntas
    // * bancoPerguntas é um array
    // * as questoes sao objetos
    {
        imagem: '/assets/quiz-img/galaxy_background1.jpg',
        questao: 'Qual a verdadeira cor do Sol?',
        alternativas: [
        { alternativa: "Vermelho", certo: false },
        { alternativa: "Amarelo", certo: false  },
        { alternativa: "Verde", certo: false },
        { alternativa: "Branco", certo: true }
        ],
    },
    {
        imagem: './assets/quiz-img/galaxy_background2.jpg',
        questao: 'O sol é considerado um...',
        alternativas: [
        { alternativa: "Uma estrela de plasma", certo: true},
        { alternativa: "Um planeta", certo: false},
        { alternativa: "Uma bola de fogo", certo: false },
        { alternativa: "Um exoplaneta", certo: false }
        ],
  },
  {
        imagem: './assets/quiz-img/galaxy_background3.jpg',
        questao: 'Quantos planetas existem no nosso sistema solar?',
        alternativas: [
        { alternativa: "7", certo: false },
        { alternativa: "8", certo: true  },
        { alternativa: "9", certo: false },
        { alternativa: "10", certo: false }
        ],
  },
  {
      imagem: './assets/quiz-img/galaxy_background4.jpg',
        questao: 'Qual é o menor planeta do sistema solar?',
        alternativas: [
        { alternativa: "Plutão", certo: false },
        { alternativa: "Marte", certo: false  },
        { alternativa: "Mercúrio", certo: true },
        { alternativa: "Júpiter", certo: false }
        ],
  }
]
