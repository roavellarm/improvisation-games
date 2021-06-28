import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import QuarantineGames from '../index'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),
}))

window.scrollTo = jest.fn()

describe('when the component is rendered', () => {
  it('should render correctly', () => {
    const { queryByText, queryAllByText } = render(withTheme(<QuarantineGames />))

    expect(queryByText('Autora: Marta Macedo Brietzke')).toBeInTheDocument()
    expect(
      queryByText(
        'Os jogos descritos abaixo foram elaborados em 2020, com base nos jogos utilizados por meu trabalho de mestrado. No momento em que foram pensados, o mundo vivia as primeiras duas ondas da pandemia de Covid 19, momento no qual o contato e a presença física se tornaram difíceis, em função das condições sanitárias e epidemiológicas. A intenção dessas atividades é manter alguns dos aspectos possíveis do ensino coletivo de instrumentos musicais, mesmo à distância, com o auxílio das tecnologias digitais. Para sua aplicação, sugiro que cada professor crie com seus alunos um ambiente virtual de trocas, como, por exemplo, um grupo de mensagens, no qual os alunos compartilhem suas criações, experiências e descobertas. Esperamos que o mundo não precise viver novas fases de isolamento e que essas atividades possam ser utilizadas em outros momentos de ensino e aprendizagem.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('1. Detetive sonoro')).toBeTruthy()
    expect(
      queryByText(
        'Cada aluno deve inventariar, no mínimo, cinco sons que começaram a fazer parte do seu dia a dia durante a quarentena. Inventariar sons que acontecem dentro de casa, sons que chegam dos vizinhos, das janelas, das ruas. Gravar os sons inventariados em áudio ou vídeo. Escolher três sons e criar uma maneira de reproduzi-los no seu instrumento. Não é necessário que seja uma reprodução literal, mas sim, que faça sentido para quem a criou. Gravar os três sons criados com o violoncelo. Enviar os sons criados para um colega. Cada aluno tem a tarefa de descobrir qual foi o som original que serviu de inspiração para seu colega. Enquanto o aluno que recebeu a gravação não descobrir qual é o som original, quem o criou vai enviando “pistas” até que o colega o identifique. Estabelecer anteriormente quanto tempo será destinado para que se descubra o som do colega, antes que se envie uma nova pista, e assim sucessivamente.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('2. Que som é esse?')).toBeTruthy()
    expect(
      queryByText(
        'Cada aluno deve enviar para um colega a gravação original de um dos seus sons inventariados. Quem recebeu e quem enviou o som deve criar com seus instrumentos, individualmente, as suas versões para representar esse som. Em momento posterior, escutar coletivamente os dois sons criados pelos dois alunos. Observar e conversar sobre as diferenças e semelhanças. Também pode ser criado uma representação coletiva para o som original, após as considerações surgidas nessa conversa.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('3. Telefone sem fio sonoro virtual')).toBeTruthy()
    expect(
      queryByText(
        'Um aluno (aluno 1) deve gravar um trecho curto de alguma criação sua no seu instrumento. Pode ser uma célula rítmica, melódica, sonoridades expandidas, etc. Em seguida, enviar para um colega (aluno 2). O colega pode ouvir apenas três vezes o trecho recebido. Em seguida, gravar a sua versão do trecho e enviar para outro colega (aluno 3). Assim vai se sucedendo a atividade até toda a turma ter participado. Ao final, as gravações são escutadas coletivamente na sequência (1, 2, 3, 4, ...). A turma deve conversar sobre o que aconteceu no processo, se aconteceram mudanças, como aconteceram, se as gravações são semelhantes, etc.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('4. Lego musical')).toBeTruthy()
    expect(
      queryByText(
        'Um aluno (aluno 1) deve gravar um trecho curto de alguma criação sua no seu instrumento. Assim como no jogo anterior, pode ser uma célula rítmica, melódica, sonoridades expandidas, etc. Enviar para um colega (aluno 2). Quem recebeu a gravação deve ouvir quantas vezes desejar e tentar reproduzir o mesmo trecho com seu instrumento. A sua versão, não precisa ser exatamente igual, mas deve ser parecida com a gravação recebida. O aluno 2 deve criar mais um trecho e acrescentar esse trecho à criação de seu colega. Gravar os dois trechos em sequência (trecho 1, trecho 2) e enviar para outro colega (aluno 3). O aluno que recebeu a gravação deve fazer o mesmo processo, continuando a criação e enviar uma gravação dos 3 trechos em sequência (trecho 1, trecho 2, trecho 3) para um outro colega. A atividade deve continuar sucessivamente até que retorne para o primeiro aluno (aluno 1), que deve reproduzir toda a criação. Todos escutam coletivamente a versão final e conversam sobre o que escutaram, colocando suas percepções, ideias, etc.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('5. Histórias da janela')).toBeTruthy()
    expect(
      queryByText(
        'Cada aluno deve gravar as sonoridades da sua janela ou do quintal de sua casa durante mais ou menos três minutos em três momentos do dia: manhã, tarde e noite. As gravações devem ser realizadas sempre no mesmo local. Cada aluno deve escutar as três gravações e perceber se existem diferenças ou semelhanças entre as sonoridades gravadas, como por exemplo, intensidades, timbres, cores, movimentos, etc. Cada um deve criar com seu instrumento uma história musical, com princípio, meio e fim, que conte algo sobre esses três momentos sonoros do dia, distintos ou semelhantes. Em seguida, cada aluno deve gravar a sua história musical e enviar para um colega. O aluno que recebeu a gravação deve escutar atentamente a história musical do seu colega e criar um pequeno texto, escrito ou oral, que conte o que ele imaginou com a história musical recebida.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('6. Escrevendo a história')).toBeTruthy()
    expect(
      queryByText(
        'Esse jogo é uma continuação do jogo 5. O aluno que recebeu a história gravada por seu colega deve construir, da sua maneira, uma “partitura” ou representação gráfica, na qual conste a sua forma de registrar a história sonora recebida.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('7. Espelho, espelho meu')).toBeTruthy()
    expect(
      queryByText(
        'Cada aluno deve escolher três sons gravados com o seu instrumento e enviar para um colega. Esse colega (aluno 2) deve criar uma partitura ou representação gráfica sobre o som recebido na gravação. Em seguida, enviar a partitura criada para um terceiro colega (aluno 3) que deve, com o seu instrumento, interpretar a partitura da sua maneira. Em seguida todos escutam o som gravado pelo aluno 1 e depois a versão do aluno 3. Em conjunto observam e conversam sobre semelhanças e diferenças. Também podem criar, coletivamente, uma nova interpretação ou uma nova partitura.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('8. Mapa musical')).toBeTruthy()
    expect(
      queryByText(
        'A turma deve criar, coletivamente, um mapa virtual de sonoridades. Esse mapa, dependendo de cada turma, pode ser o mapa do país, do estado, da cidade, do bairro ou da rua. Inicialmente, confeccionar através de uma foto, de uma imagem ou desenho, um mapa, conforme escolhido por todos. Colocar esse mapa em uma plataforma digital, na qual possa ser visualizado por toda a turma. Cada pessoa deve gravar com seu instrumento, no mínimo, três pequenos vídeos ou áudios com sonoridades que representem o lugar onde vive. Esses sons podem ser sons da casa ou do entorno. O professor recebe esses vídeos ou áudios, cria um link em alguma mídia social e anexa o link ao mapa, no local onde essa pessoa vive. Disponibilizar o mapa com os vídeos linkados para todas as pessoas da turma. Reservar um ou mais momentos em que a turma possa assistir os vídeos coletivamente, estabelecendo os diálogos que podem surgir dessa experiência.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('9. Sons da saudade')).toBeTruthy()
    expect(
      queryByText(
        'Cada pessoa da turma pesquisa em seu instrumento algumas sonoridades que representem, para ela, lugares, coisas, pessoas, situações, experiências, que sente saudades por não estarem presentes, ou sendo vivenciadas, devido a distância física. Em uma reunião coletiva cada pessoa da turma mostra com seu instrumento, ou com uma gravação realizada previamente, o som escolhido. Em seguida, conta um pouco para seus colegas sobre o som escolhido e sobre o que ele representa para ela.'
      )
    ).toBeInTheDocument()
    expect(queryAllByText('10. Nossa música da quarentena')).toBeTruthy()
    expect(
      queryByText(
        'Coletivamente, a turma deve criar uma música que englobe todas as sonoridades escolhidas na atividade 9. A turma deve decidir se contará alguma história coletiva com essas sonoridades ou se a música não será descritiva, como os sons serão organizados, se vão soar simultaneamente ou em sequência. Além das escolhas musicais deve ser levada em conta, também, a destreza e as possibilidades tecnológicas ao alcance de cada turma. Cada aluno deve gravar no seu instrumento um pequeno vídeo executando a sonoridade escolhida por ele. Uma ou mais pessoas montam um vídeo ou áudio com a música criada conforme as orientações da turma e a apresentam, posteriormente, para que todos a escutem coletivamente. Esse processo pode levar quantas aulas forem necessárias, pois as combinações realizadas podem ser avaliadas e, consequentemente, alteradas, até que a turma chegue a um consenso sobre a proposta final. Posteriormente, a turma pode escrever coletivamente uma partitura ou representação gráfica da música criada.'
      )
    ).toBeInTheDocument()
  })
})
