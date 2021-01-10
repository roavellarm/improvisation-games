import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import * as C from '../../components'
import * as S from './styles'

export default function About() {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <>
      <Navbar />
      <S.Container>
        <S.SideArea>{windowWith > 800 && <S.ImgBottomLeft />}</S.SideArea>

        <S.Content>
          <C.HeaderTitle isAboutPage>Saiba mais</C.HeaderTitle>
          <C.Paragraph>
            Este site foi pensado para professores de violoncelo de alunos
            iniciantes de desenvolvimento instrumental, que utilizem abordagens
            de ensino coletivo. É um produto de uma pesquisa de mestrado que se
            realizou na Universidade de São Paulo, São Paulo, Brasil, nos anos
            de 2017 e 2018.
          </C.Paragraph>
          <C.Paragraph>
            Apesar do trabalho de pesquisa ter sido direcionado para alunos de
            violoncelo, muitas das propostas contidas nos jogos podem ser
            utilizadas para outros instrumentos e, também, para outros níveis de
            aprendizagem, cabendo a cada professor fazer as adaptações que
            julgar necessárias e efetivas para suas demandas. Além disso, cabem
            muitos desdobramentos das propostas iniciais, que podem suscitar
            outras ideias e perspectivas de trabalho.
          </C.Paragraph>
          <C.Paragraph>Boa diversão e boas aprendizagens!</C.Paragraph>
          <C.Title>Sobre a autora</C.Title>
          <C.Paragraph>
            Meu nome é Marta Macedo Brietzke e sou natural de Porto Alegre, Rio
            Grande do Sul, Brasil. Iniciei meus estudos de música com meu pai e,
            logo após, no Projeto Prelúdio e na Orquestra Infanto-Juvenil da
            Universidade Federal do Rio Grande do Sul, com o violino e o
            violoncelo. Me graduei em Música nessa mesma universidade, fazendo
            minha pós-graduação em São Paulo, na Universidade de São Paulo.
          </C.Paragraph>
          <C.Paragraph>
            Atuei como instrumentista e como professora em orquestras e projetos
            sociais da capital e da região metropolitana do meu estado. Em
            conjunto com alguns alunos de violoncelo, fundamos em Porto Alegre
            um espaço autogestionado de ensino e aprendizagem do violoncelo,
            denominado Filarmônica de Violoncelos-Tchêllistas. Minha área de
            pesquisa se relaciona ao ensino coletivo de instrumentos musicais,
            abordando distintas possibilidades e facetas. Também me dedico à
            performance de música contemporânea de concerto, fazendo a estreia
            de algumas peças de compositores brasileiros.
          </C.Paragraph>
          <C.Paragraph>
            {`Minha `}
            <strong>dissertação</strong>
            {` está disponível `}
            <S.Link
              target="_blank"
              href="https://teses.usp.br/teses/disponiveis/27/27158/tde-11032019-113124/publico/MartaMacedoBrietzkeVC.pdf"
            >
              aqui
            </S.Link>
            .
          </C.Paragraph>
          <C.Title>
            {`Entre em contato `}
            <S.Link target="_blank" href="mailto:martabrietzke@gmail.com">
              aqui
            </S.Link>
          </C.Title>
        </S.Content>

        <S.SideArea>
          <S.ImgTopRight />
          {windowWith > 800 && <S.ImgBottomRight />}
        </S.SideArea>
      </S.Container>
    </>
  )
}
