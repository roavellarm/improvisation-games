import audioGame3 from '../sounds/a-noite-no-castelo.mp3'
import audioGame6 from '../sounds/composicao-com-gravuras.mp3'

export interface GameContent {
  text?: string
  flags: Array<string>
  audio?: string
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
          '​Estabelecer uma relação entre o imaginado e o sonoro; reforçar a confiança entre pares; desenvolver o poder de escolha dentro da criação musical.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia',
        flags: ['title2'],
      },
      {
        text:
          'Contar uma história aos alunos, sobre um viajante que chega à um castelo mal-assombrado em meio a uma noite de tempestade',
        flags: ['itemList'],
      },
      {
        text:
          'Inventariar sons que poderiam compor esta paisagem: trovões, rajadas de vento, som da chuva, morcegos, fantasmas, etc...',
        flags: ['itemList'],
      },
      {
        text:
          'Distribuir os alunos em diferentes pontos da sala, com uma certa distância entre eles.',
        flags: ['itemList'],
      },
      {
        text:
          'Escolher um dos alunos para representar o viajante. Este aluno fará uma caminhada pelo castelo, evitando bater nos “objetos”, sendo guiado por sua audição. Quando o viajante se  aproximar de um objeto do castelo, o aluno que representa este objeto executará o seu som específico. À medida que o viajante se afastar do objeto, o som diminui de  intensidade, e o aluno que agora estiver mais próximo do viajante começará a executar o   som correspondente ao seu objeto, e assim sucessivamente, compondo uma narrativa musical.',
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
      {
        flags: ['audio'],
        audio: audioGame3,
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
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          'Possibilitar a experiência de criação a partir de células musicais pré-estabelecidas; proporcionar diferenças entre as polifonias e homofonias; incentivar o poder de escolha dentro da criação musical.',
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
          'Perguntar aos alunos o que é uma assinatura e relacionar as respostas com o que poderia ser uma assinatura musical.',
        flags: ['itemList'],
      },
      {
        text:
          'Dar um exemplo utilizando para isso sons provenientes das técnicas tradicionais e das técnicas estendidas.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor que os alunos individualmente criem suas assinaturas musicais, utilizando os sons que desejarem, e as apresentem para os demais colegas da turma.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor que os alunos executem suas assinaturas mais de uma vez, a fim de que possamos verificar se ele se mantém a mesma nas duas execuções.',
        flags: ['itemList'],
      },
      {
        text:
          'Escolher um dos alunos da turma para ser o “maestro”, que deverá compor uma música utilizando apenas as assinaturas musicais elaboradas pelos alunos.',
        flags: ['itemList'],
      },
      {
        text:
          'O “maestro” deve criar sinais que indiquem quando um aluno deve começar a tocar sua assinatura, quando deve parar, com qual intensidade, velocidade e outras variáveis, quantos alunos devem tocar simultaneamente, criando diálogos, interação e diferentes combinações entre as assinaturas.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Devemos estimular os alunos a trabalharem sua escuta e sua escolha artística frente ao material apresentado pelos colegas. Dessa forma, evitamos novamente que o jogo se torne mecânico e proporcionamos a construção de uma ideia musical consistente.',
        flags: ['itemList'],
      },
      {
        text:
          'É interessante, em todos os jogos, que o professor seja o maestro na primeira vez que o jogo está sendo executado, mas que em seguida sejam escolhidos diferentes alunos para assumirem essa função, possibilitando que todos os alunos do grupo possam, em algum  momento, participar como maestros de algum dos jogos de improvisação.',
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
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          '​Trabalhar as ideias de similaridade e diferença em música; proporcionar a criação a partir de um elemento dado previamente; trabalhar a ideia de frases ou narrativas musicais.',
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
          'Apresentar três pequenos cartazes. Em um cartaz deverá estar representado o sinal matemático de igual, em outro o sinal de diferente e em outro o sinal de parecido.',
        flags: ['itemList'],
      },
      {
        text:
          'O primeiro aluno deve criar livremente uma frase musical, utilizando para isso os sons que desejar.',
        flags: ['itemList'],
      },
      {
        text:
          'O professor escolhe um dos cartazes e mostra ao segundo aluno, que deve seguir as instruções contidas no cartaz, executando, assim, uma frase igual, parecida ou diferente da frase criada pelo primeiro aluno.',
        flags: ['itemList'],
      },
      {
        text:
          'Oferecer um dos cartazes ao terceiro aluno, que deverá executar sua frase seguindo as instruções do cartaz, fazendo referência a frase executada pelo segundo aluno e assim por diante, até que todos os alunos tenham participado algumas rodadas do jogo.',
        flags: ['itemList'],
      },
      {
        text:
          'Escolher um dos alunos para ser o “maestro” e mostrar os cartazes aos demais colegas. Podemos acrescentar mais complexidade nesta rodada do jogo, propondo que o “maestro”, além de escolher os cartazes, escolha também qual aluno executará a nova frase, sendo que para isso, o “maestro” deve utilizar sinais de linguagem não-verbais.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Ao acrescentarmos mais complexidade na variação do jogo propiciaremos que os alunos desenvolvam mais atenção na escuta.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '6',
    gameTitle: 'Jogo 6',
    content: [
      {
        text: 'Composição com gravuras e escrita com notação própria',
        flags: ['title1'],
      },
      {
        text: 'Autor: Diversos autores/Marta Brietzke',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          '​Aproximar os alunos da ideia de composição; desenvolver uma simbologia própria que represente suas ideias musicais, fazer contato com diferentes maneiras de escrita e representação musical; atentar para as limitações existentes em qualquer tipo de escrita musical; aproximar compositores e intérpretes.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text:
          'Solicitar que na aula anterior os alunos tragam gravuras, imagens ou fotos para realizar uma criação coletiva.',
        flags: ['itemList'],
      },
      {
        text: 'Dividir a turma em grupos de cinco ou seis alunos.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada grupo deve examinar as gravuras e imagens e criar uma história, que pode ser decorrente de quantas imagens o grupo escolher para isso, sendo que este número pode variar entre os diferentes grupos.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor aos alunos que criem uma história que apresente um enredo, contendo início, meio e final.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor aos alunos que escolham diferentes sons e suas combinações para que a história criada por eles possa ser representada apenas através da música.',
        flags: ['itemList'],
      },
      {
        text:
          'Após a criação da música, distribuir para cada grupo uma cartolina, uma caixa de lápis de cor e alguns outros materiais, como por exemplo, fitas coloridas, palitos de dente, pedrinhas, etc.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada grupo deverá “escrever” a sua música, utilizando para isso os sinais que desejar, desenhos, palavras, símbolos, etc.',
        flags: ['itemList'],
      },
      {
        text:
          'Após a escrita da música cada grupo deverá ensaiar algumas veze sua composição, utilizando ou não o apoio da partitura.',
        flags: ['itemList'],
      },
      {
        text: 'Propor que cada grupo apresente aos colegas a sua música.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Durante o processo de criação da história e da música devemos dar aos alunos autonomia para que eles mesmos se organizem e estabeleçam relações entre eles, estimulando que todos os alunos devem participar deste processo.',
        flags: ['itemList'],
      },
      {
        text:
          'De igual maneira devemos dar autonomia aos alunos durante seus ensaios e durante a apresentação, sendo que os grupos podem escolher como fará esta apresentação, contando ou não a história criada, apresentando ou não a partitura.',
        flags: ['itemList'],
      },
      {
        text:
          'Devemos estimular apenas que durante a apresentação da música a comunicação entre os alunos seja estabelecida de forma não-verbal.',
        flags: ['itemList'],
      },
      {
        audio: audioGame6,
        flags: ['audio'],
      },
    ],
  },
  {
    id: '7',
    gameTitle: 'Jogo 7',
    content: [
      {
        text: 'Improvisação com ostinato',
        flags: ['title1'],
      },
      {
        text: 'Autor: Diversos autores/Marta Brietzke',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          'Trabalhar a noção de ​ solo e ​ tutti; ​ trabalhar a ideia de ostinato; trabalhar o conceito de forma musical.',
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
        text: 'Explicar aos alunos o que é um ostinato.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor um ostinato ritmico simples, a ser executado, por exemplo, com uma corda solta.',
        flags: ['itemList'],
      },
      {
        text: 'Dividir o grupo em orquestra e solista.',
        flags: ['itemList'],
      },
      {
        text:
          'O grupo que representa a orquestra deve executar o ostinato, enquanto o aluno solista executa diferentes frases ou ideias musicais, utilizando os sons que desejar.',
        flags: ['itemList'],
      },
      {
        text:
          'Combinar com os alunos qual será a indicação que determinará o final do solo.',
        flags: ['itemList'],
      },
      {
        text:
          'Após a execução do solo por um aluno, o aluno seguinte passa a ser o solista, e assim sucessivamente, até que todos os alunos tenham participado no papel de solistas.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Durante os solos não é necessário que pensemos em harmonia ou condução vocal, pois a improvisação não necessita obedecer aos padrões do tonalismo.',
        flags: ['itemList'],
      },
      {
        text:
          'O objetivo desta improvisação é que os alunos possam organizar livremente suas ideias, utilizando os conteúdos já absorvidos por eles.',
        flags: ['itemList'],
      },
      {
        text:
          'A improvisação pode ser organizada de diferentes maneiras, por exemplo, estabelecer que após o final de cada solo se executará um número determinado de vezes os ostinato, ou propor uma forma rondó, onde a parte A será um número fixo de vezes que a orquestra executará o ostinato, ou um tema criado em conjunto pelos alunos.',
        flags: ['itemList'],
      },
      {
        text:
          'Podemos organizar e acrescentar complexidades no decorrer das jogadas, intercalando-as com audições coletivas das improvisações criadas pelos alunos.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '8',
    gameTitle: 'Jogo 8',
    content: [
      {
        text: 'A floresta encantada',
        flags: ['title1'],
      },
      {
        text: 'Autor: Claudia Freixedas',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:​',
        flags: ['title2'],
      },
      {
        text: 'Trabalhar o diálogo musical; trabalhar a ideia de polifonia.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text:
          'Este jogo é uma variação do jogo 3, A noite no castelo, porém, sendo acrescentadas algumas complexidades.',
        flags: ['itemList'],
      },
      {
        text:
          'Posicionar os alunos em diferentes pontos da sala, com alguma distância entre eles.',
        flags: ['itemList'],
      },
      {
        text:
          'Contar uma história sobre dois exploradores que chegam a uma floresta encantada.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada árvore da floresta emitirá um som escolhido pelo alunos que a representará.',
        flags: ['itemList'],
      },
      {
        text: 'Os exploradores podem estar com os olhos abertos ou vendados.',
        flags: ['itemList'],
      },
      {
        text:
          'Ao se aproximarem das árvores, essas emitem o som escolhido pelo aluno que a representa. Ao se afastarem, a intensidade do som vai diminuindo e o aluno que estiver mais próximo começa a emitir o seu som escolhido',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Devemos acrescentar algumas diferenças e complexidades neste jogo em relação ao jogo 3, A noite no castelo.',
        flags: ['itemList'],
      },
      {
        text:
          'Uma das complexidades a serem acrescentadas é a participação de dois “maestros”, o que resultará em interações e diálogos musicais entre eles.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '9',
    gameTitle: 'Jogo 9',
    content: [
      {
        text: 'Passeio no zoológico',
        flags: ['title1'],
      },
      {
        text: 'Autor: Violeta Gainza',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          'Trabalhar diferentes opções musicais de uma mesma sonoridade, trabalhar a ideia de  narrativa musical.',
        flags: ['paragraph'],
      },
      {
        text: 'Metodologia:',
        flags: ['title2'],
      },
      {
        text: 'Organizar os alunos em semicírculo.',
        flags: ['itemList'],
      },
      {
        text:
          'Contar aos alunos uma história de um visitante que chega a um zoológico e observa os diferentes animais.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada aluno escolhe um animal para ser representado por ele, escolhendo sons que o caracterizem.',
        flags: ['itemList'],
      },
      {
        text:
          'O visitante realiza um passeio pelo zoológico, se posicionando frente aos diferentes animais, e nesse momento, os animais reproduzem o som escolhido pelos alunos.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Podemos propor que os animais emitam os seus sons de acordo com as indicações corporais do visitante, executando diferentes níveis de dinâmica, intensidade e caráter musical.',
        flags: ['itemList'],
      },
      {
        text:
          'Assim como nos jogos anteriores podemos gravar as improvisações, possibilitando que nas próximas rodadas dos jogos as interações sejam cada vez mais provenientes das escolhas musicais dos alunos.',
        flags: ['itemList'],
      },
    ],
  },
  {
    id: '10',
    gameTitle: 'Jogo 10',
    content: [
      {
        text: 'Os pássaros e o caçador',
        flags: ['title1'],
      },
      {
        text: 'Autor: Cláudia Freixedas/Marta Brietzke',
        flags: ['paragraph'],
      },
      {
        text: 'Objetivos:',
        flags: ['title2'],
      },
      {
        text:
          'Trabalhar a liberdade e as diferentes opções para o início, o desenvolvimento e o final da “peça” musical, trabalhar questões ligadas à ecologia e à ecologia acústica; trabalhar os diálogos, as polifonias e a noção de forma musical.',
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
        text: 'Perguntar aos alunos quais sons de pássaros eles conhecem.',
        flags: ['itemList'],
      },
      {
        text: 'Inventariar junto aos alunos alguns desses sons.',
        flags: ['itemList'],
      },
      {
        text:
          'Propor que os alunos criem nos seus violoncelos sons que representem os inventariados previamente.',
        flags: ['itemList'],
      },
      {
        text:
          'Criar em conjunto com os alunos um som que represente o caçador.',
        flags: ['itemList'],
      },
      {
        text:
          'Cada aluno atuará representando o som de um dos pássaros, e um aluno representará o caçador.',
        flags: ['itemList'],
      },
      {
        text:
          'Os pássaros devem dialogar entre si, criando um contexto musical.',
        flags: ['itemList'],
      },
      {
        text:
          'Quando desejar, o aluno que representa o caçador pode intervir na mata. Quando o caçador intervir, todos os pássaros se calam.',
        flags: ['itemList'],
      },
      {
        text:
          'Pouco a pouco, os pássaros voltam a cantar e a dialogar entre si.',
        flags: ['itemList'],
      },
      {
        text: 'O caçador pode intervir na mata o número de vezes que desejar.',
        flags: ['itemList'],
      },
      {
        text: 'Observações:',
        flags: ['title2'],
      },
      {
        text:
          'Devemos proporcionar autonomia aos alunos, deixando a seu critério quando será o início e o final da improvisação, bem como, depois de quanto tempo após a intervenção do caçador, os pássaros voltarão a cantar.',
        flags: ['itemList'],
      },
    ],
  },
]

export default gameList
