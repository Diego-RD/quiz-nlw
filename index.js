const perguntas = [
  {
    pergunta: "Quem e o GOT do basquete segundo Diego seu amigo",
    resposta: [
      "Lebron James",
      "Stephen Curry",
      "Ja Morrant"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos títulos da NBA Stephen Curry conquistou até agora?",
    resposta: [
      "3",
      "4",
      "5"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a posição principal de Stephen Curry na NBA?",
    resposta: [
      "Ala-armador",
      "Pivô",
      "Armador"
    ],
    correta: 2
  },
  {
    pergunta: "Em qual universidade Stephen Curry jogou durante o período universitário?",
    resposta: [
      "University of North Carolina",
      "Duke University",
      "Davidson College"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o apelido de Stephen Curry com seus colegas de equipe?",
    resposta: [
      "Chef Curry",
      "King Curry",
      "MVP Curry"
    ],
    correta: 0
  },
  {
    pergunta: "Quantas vezes Stephen Curry foi nomeado MVP da temporada regular da NBA?",
    resposta: [
      "1",
      "2",
      "3"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o recorde de mais cestas de 3 pontos feitas em uma única temporada da NBA, estabelecido por Stephen Curry?",
    resposta: [
      "200",
      "272",
      "402"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a idade de Stephen Curry em 2024?",
    resposta: [
      "33 anos",
      "35 anos",
      "36 anos"
    ],
    correta: 1
  },
  {
    pergunta: "Quantos irmãos Stephen Curry tem que também jogaram na NBA?",
    resposta: [
      "Nenhum",
      "1",
      "2"
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi a posição de Stephen Curry no Draft da NBA em que foi selecionado?",
    resposta: [
      "4ª escolha geral",
      "5ª escolha geral",
      "8ª escolha geral"
    ],
    correta: 1
  }
];

// Exemplo de acesso à primeira pergunta
console.log(perguntas[0]);

  
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
  
  
  