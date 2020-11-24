import React from 'react'
import * as S from './styles'
// import styled from 'styled-components'
import arrowLeft from '../../assets/images/arrow-left.svg'

// import articleJS from '../../assets/article'
import Title1 from '../../components/Title1'
import Title2 from '../../components/Title2'
import Title3 from '../../components/Title3'
import Paragraph from '../../components/Paragraph'
import ItemList from '../../components/ItemList'

export default function Article() {
  // const [article] = useState<Array<Props[]>>(articleJS)
  // const [pages, setPages] = useState([])

  // useEffect(() => {}, [])

  return (
    <S.Container>
      <S.MyLink to="/">
        <img
          style={{ padding: '10px 5px' }}
          src={arrowLeft}
          alt="imageArrowLeft"
        />
      </S.MyLink>

      <Title1>
        JOGOS DE IMPROVISAÇÃO EM MÚSICA CONTEMPORÂNEA: POSSIBILIDADES PARA A
        INICIAÇÃO COLETIVA AO VIOLONCELO
      </Title1>

      <Title2>Marta Macedo Brietzke(martabrietzke@gmail.com)</Title2>
      <Title3>Metodologia e aplicação:</Title3>
      <Paragraph>
        Propomos, então, aos alunos que o grupo se divida em orquestra e
        solista. O grupo que representará a orquestra executará o ritmo ostinato
        com corda solta ré, enquanto o aluno escolhido para ser solista
        executará diferentes frases, englobando os conhecimentos musicais e
        técnicos já aprendidos por eles. Não é necessário, nesse momento, que se
        pense em harmonia ou condução vocal, pois a improvisação não necessita
        obedecer aos padrões estéticos do tonalismo. O objetivo é que os alunos
        possam utilizar livremente seus conhecimentos musicais e organizar suas
        ideias tendo como ponto de partida um ritmo em ostinato.
      </Paragraph>
      <ItemList>
        Fonte: Elaborado pela autora, com base nas propostas de Claudia
        Freixedas
      </ItemList>
    </S.Container>
  )
}
