export interface GameContent {
  text: string
  flags: Array<string>
  titleStrong?: string | undefined
  rest?: string | undefined
}

export interface Game {
  id: string
  gameTitle: string
  content: GameContent[]
}

const itemList = 'Morbi scelerisque dui et metus eleifend pharetra.'
const paragraph =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.'

const gameList: Game[] = [
  {
    id: '1',
    gameTitle: 'Jogo 1',
    content: [
      {
        text: 'Pergunta e Resposta com cordas soltas em ​ pizzicato',
        flags: ['title1'],
      },
      {
        text: 'Autor: Marta Brietzke',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          'Propiciar aos alunos a consciência da sua individualidade e seu papel dentro do coletivo, estabelecer as ideias de narrativa musical, de perguntas e respostas, enfatizando o uso das quatro cordas do violoncelo, do ​ pizzicato, ​ de diferentes ritmos, métricas, timbres e dinâmicas.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text: 'Organizar os alunos em um semicírculo.',
        flags: ['itemList'],
      },
      {
        text:
          'Explicar aos alunos o que pode ser uma pergunta e o que pode ser uma resposta dentro de uma narrativa musical.',
        flags: ['itemList'],
      },
      {
        text:
          'Dar um exemplo utilizando apenas as cordas soltas do violoncelo, contemplando diferentes ritmos, métricas, dinâmicas e variações de caráter.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor uma pergunta ao primeiro aluno, que deve tocar uma resposta. Em seguida fazer o mesmo em relação ao segundo aluno, e assim sucessivamente, abordando à todos os alunos, um a um, individualmente.',
        flags: ['itemList'],
      },
      {
        text: 'Realizar algumas rodadas do jogo.',
        flags: ['itemList'],
      },
      {
        text:
          'Organizar os alunos em duplas, dispostos em diferentes pontos da sala.',
        flags: ['itemList'],
      },
      {
        text:
          'Um aluno de cada dupla deve fazer as perguntas e o outro aluno deve fazer as respostas durante alguns minutos.',
        flags: ['itemList'],
      },
      {
        text: 'Alternar os papeis da atividade anterior.',
        flags: ['itemList'],
      },
      {
        text: 'Organizar novamente a turma em semicírculo.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada dupla vem ao centro do semicírculo e realiza algumas séries de perguntas e respostas, apresentando-as para seus colegas de classe​.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Proporcionar aos alunos autonomia de decisão quanto ao número de perguntas e respostas que eles apresentarão aos seus colegas, quanto a distribuição dos papeis e quanto a combinações entre eles que determinem o início e fim da apresentação aos colegas.',
        flags: ['itemList'],
      },
      {
        text:
          'Com frequência se observa um aumento de complexidade na elaboração das perguntas e respostas dos estudantes ao longo das atividades.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '2',
    gameTitle: 'Jogo 2',
    content: [
      {
        text: 'Sinal Verde X Sinal Vermelho',
        flags: ['title1'],
      },
      {
        text: 'Autor: Maria Teresa Alencar de Brito/Murray Schafer',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          '​Trabalhar as diferenças entre som e silêncio, bem como sua importância e papel dentro da construção musical; aprofundar a importância da coletividade dentro do processo musical; estabelecer a ideia de diálogo musical.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text: 'Organizar os alunos em um semicírculo.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor que os alunos explorem diferentes sonoridades dos seus violoncelos, associadas às técnicas estendidas.',
        flags: ['itemList'],
      },
      {
        text:
          'Apresentar uma determinada sonoridade e propor que os alunos, em conjunto, a reproduzam.',
        flags: ['itemList'],
      },
      {
        text:
          'Estimular os alunos a explorarem, individualmente, os seus instrumentos, buscando novas sonoridades.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada aluno deverá apresentar uma sonoridade pesquisada aos demais colegas da turma, que devem, em conjunto, reproduzí-la.',
        flags: ['itemList'],
      },
      {
        text:
          'Apresentar dois pequenos cartazes aos alunos, um da cor verde e outro da cor vermelha. Associar os cartazes com as leis de trânsito, sendo que verde significará “tocar” e vermelho significará “não tocar”.',
        flags: ['itemList'],
      },
      {
        text:
          'Executar algumas combinações com os cartazes, propondo que os alunos toquem quaisquer sons que desejarem, oriundos das técnicas tradicionais ou das técnicas estendidas.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor algumas variações de dinâmica, dependendo da maneira como os cartazes forem apresentado aos alunos.',
        flags: ['itemList'],
      },
      {
        text:
          'Escolher um aluno para ser o “maestro” dos demais, cabendo à ele a função de apresentar os cartazes aos colegas.',
        flags: ['itemList'],
      },
      {
        text:
          'Dividir a turma em dois grupos, escolhendo um “maestro” por grupo, sendo que cada “maestro” receberá um conjunto de cartazes verde e vermelho.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada grupo deverá seguir as indicações dos seus respectivos “maestros”, que devem se comunicar, de maneira não-verbal, a fim de proporcionar a interação e o diálogo musical entre os dois grupos.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Devemos estar atentos e estimular o poder de escuta dos alunos, ressaltando que as diferentes combinações de sons e silêncios estabelecidas entre os “maestros” proporcionaa criação de uma narrativa musical.',
        flags: ['itemList'],
      },
    ],
  },
  // TODO
  {
    id: '3',
    gameTitle: 'Jogo 3',
    content: [
      {
        text: 'A noite no castelo',
        flags: ['title1'],
      },
      {
        text: 'Autor: Claudia Freixedas',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos',
        flags: ['title2'],
      },
      {
        text:
          '​ Estabelecer uma relação entre o imaginado e o sonoro; reforçar a confiança entre pares; desenvolver o poder de escolha dentro da criação musical.',
        flags: ['itemList'],
      },
      {
        text: 'Metodologia',
        flags: ['title2'],
      },
      {
        text:
          'Contar uma história aos alunos, sobre um viajante que chega à um castelo mal-assombrado em meio a uma noite de tempestade Inventariar sons que poderiam compor esta paisagem: trovões, rajadas de vento, som da chuva, morcegos, fantasmas, etc... Distribuir os alunos em diferentes pontos da sala, com uma certa distância entre eles. Escolher um dos alunos para representar o viajante. Este aluno fará uma caminhada pelo castelo, evitando bater nos “objetos”, sendo guiado por sua audição. Quando o viajante se  aproximar de um objeto do castelo, o aluno que representa este objeto executará o seu som específico. À medida que o viajante se afastar do objeto, o som diminui de  intensidade, e o aluno que agora estiver mais próximo do viajante começará a executar o   som correspondente ao seu objeto, e assim sucessivamente, compondo uma narrativa musical.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'A fim de estimular os alunos a intensificarem seu poder de escuta, podemos propor que o viajante permaneça mais tempo na frente do objeto que quer ouvir, ou que volte à um determinado objeto que deseja ouvir novamente, exercendo papel ativo na composição da narrativa.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '4',
    gameTitle: 'Jogo 4',
    content: [
      {
        text: 'Assinatura Musical',
        flags: ['title1'],
      },
      {
        text: 'Autor: Wanderson Cruz',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text:
          'Organizar os alunos em um semicírculo. Perguntar aos alunos o que é uma assinatura e relacionar as respostas com o que poderia ser uma assinatura musical. Dar um exemplo utilizando para isso sons provenientes das técnicas tradicionais e das técnicas estendidas. Propor que os alunos individualmente criem suas assinaturas musicais, utilizando os sons que desejarem, e as apresentem para os demais colegas da turma. Propor que os alunos executem suas assinaturas mais de uma vez, a fim de que possamos verificar se ele se mantém a mesma nas duas execuções. Escolher um dos alunos da turma para ser o “maestro”, que deverá compor uma música utilizando apenas as assinaturas musicais elaboradas pelos alunos. O “maestro” deve criar sinais que indiquem quando um aluno deve começar a tocar sua  assinatura, quando deve parar, com qual intensidade, velocidade e outras variáveis, quantos alunos devem tocar simultaneamente, criando diálogos, interação e diferentes combinações entre as assinaturas.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Devemos estimular os alunos a trabalharem sua escuta e sua escolha artística frente ao  material apresentado pelos colegas. Dessa forma, evitamos novamente que o jogo se  torne mecânico e proporcionamos a construção de uma ideia musical consistente. ● É interessante, em todos os jogos, que o professor seja o maestro na primeira vez que o jogo está sendo executado, mas que em seguida sejam escolhidos diferentes alunos para assumirem essa função, possibilitando que todos os alunos do grupo possam, em algum  momento, participar como maestros de algum dos jogos de improvisação.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '5',
    gameTitle: 'Jogo 5',
    content: [
      {
        text: 'Igual X Parecido X Diferente',
        flags: ['title1'],
      },
      {
        text: 'Autor: Violeta Gainza',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos: ',
        flags: ['title2'],
      },
      {
        text:
          '​ Trabalhar as ideias de similaridade e diferença em música; proporcionar a criação a partir de um elemento dado previamente; trabalhar a ideia de frases ou narrativas musicais.',
        flags: ['itemList'],
      },
      {
        text: 'Metodologia: ',
        flags: ['title2'],
      },
      {
        text:
          'Organizar os alunos em um semicírculo. Apresentar três pequenos cartazes. Em um cartaz deverá estar representado o sinal matemático de igual, em outro o sinal de diferente e em outro o sinal de parecido. O primeiro aluno deve criar livremente uma frase musical, utilizando para isso os sons que desejar. O professor escolhe um dos cartazes e mostra ao segundo aluno, que deve seguir as instruções contidas no cartaz, executando, assim, uma frase igual, parecida ou diferente da frase criada pelo primeiro aluno. Oferecer um dos cartazes ao terceiro aluno, que deverá executar sua frase seguindo as instruções do cartaz, fazendo referência a frase executada pelo segundo aluno e assim por diante, até que todos os alunos tenham participado algumas rodadas do jogo. Escolher um dos alunos para ser o “maestro” e mostrar os cartazes aos demais colegas. Podemos acrescentar mais complexidade nesta rodada do jogo, propondo que o “maestro”, além de escolher os cartazes, escolha também qual aluno executará a nova frase, sendo que para isso, o “maestro” deve utilizar sinais de linguagem não-verbais.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Ao acrescentarmos mais complexidade na variação do jogo propiciaremos que os alunos  desenvolvam mais atenção na escuta.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '6',
    gameTitle: 'Jogo 6',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text: paragraph,
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '7',
    gameTitle: 'Jogo 7',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text: paragraph,
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '8',
    gameTitle: 'Jogo 8',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text: paragraph,
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '9',
    gameTitle: 'Jogo 9',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text: paragraph,
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '10',
    gameTitle: 'Jogo 10',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text: paragraph,
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
      {
        text: itemList,
        flags: ['itemList'],
      },
    ],
  },
]

export default gameList
