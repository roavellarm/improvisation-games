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

const gameList: Game[] = [
  {
    id: '1',
    gameTitle: 'Jogo 1',
    content: [
      {
        text: 'Jogo 1: Pergunta e Resposta com cordas soltas em ​ pizzicato',
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
        text: 'Jogo 2: Sinal Verde X Sinal Vermelho',
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
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '4',
    gameTitle: 'Jogo 4',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '5',
    gameTitle: 'Jogo 5',
    content: [
      {
        text: 'Title 1',
        flags: ['title1'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
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
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
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
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
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
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
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
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
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
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Title 2',
        flags: ['title2'],
      },
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui et metus eleifend pharetra. Duis sit amet sapien ornare, euismod risus at, vehicula ante. Etiam facilisis, erat vitae posuere porttitor, dui elit accumsan mi, ac lobortis ante dui ac elit. Sed tempus et quam nec vulputate. Vivamus id turpis et turpis consequat suscipit sit amet quis nisl. Nullam eu placerat magna. Morbi malesuada sed augue at vehicula. Sed quis libero vel erat aliquet luctus vel non urna. Pellentesque nec sem dictum, aliquet odio cursus, facilisis dolor. Fusce at consectetur mauris.',
        flags: ['paragraph'],
      },
      {
        text: 'Morbi scelerisque dui et metus eleifend pharetra. ',
        flags: ['itemList'],
      },
    ],
  },
]

export default gameList
