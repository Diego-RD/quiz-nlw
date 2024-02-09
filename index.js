const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para se referir a um elemento HTML com o ID 'exemplo' em JavaScript?",
      resposta: [
        "getElementByName('exemplo')",
        "document.querySelector('#exemplo')",
        "document.getElementById('exemplo')"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console do navegador em JavaScript?",
      resposta: [
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      resposta: [
        "v carName;",
        "variable carName;",
        "var carName;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      resposta: [
        "Adiciona um elemento HTML ao documento",
        "Executa uma função quando um evento ocorre",
        "Remove um ouvinte de evento do elemento"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      resposta: [
        "Verifica se dois valores são idênticos",
        "Verifica se dois valores são do mesmo tipo e valor",
        "Atribui um valor a uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelectorAll' em JavaScript?",
      resposta: [
        "Seleciona todos os elementos com o mesmo ID",
        "Seleciona todos os elementos com a mesma classe",
        "Seleciona todos os elementos que correspondem a um seletor CSS"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em um array JavaScript?",
      resposta: [
        "Remove o último elemento do array",
        "Adiciona um novo elemento ao início do array",
        "Adiciona um novo elemento ao final do array"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      resposta: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      resposta: [
        "Remove os decimais de um número",
        "Arredonda um número para o inteiro mais próximo",
        "Formata um número com um número específico de casas decimais"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      resposta: [
        "Retorna o tipo de uma variável ou expressão",
        "Compara dois valores",
        "Converte um valor para o tipo especificado"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.getElementById('quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +' de ' + totalDePerguntas
  
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let respostas of item.resposta){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(respostas)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
          
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dt').remove()
    
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
    
  }
  
  
  