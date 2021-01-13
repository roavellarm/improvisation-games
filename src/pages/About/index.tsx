import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { HeaderTitle, Paragraph, Title } from '../../components'
import Navbar from '../../components/Navbar'
import * as S from './styles'
import dissertation from '../../assets/texts/DissertacaoMartaMacedoBrietzke.pdf'

export default function About() {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  const isDesktopScreen = useMemo(() => windowWith > 800, [windowWith])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <>
      <Navbar />
      <S.Container>
        <S.SideArea>{isDesktopScreen && <S.ImgBottomLeft />}</S.SideArea>

        <S.Content>
          <HeaderTitle isAboutPage>Saiba mais</HeaderTitle>
          <Paragraph>
            Este site foi pensado para professores de violoncelo de alunos
            iniciantes de desenvolvimento instrumental, que utilizam abordagens
            de ensino coletivo. É um produto de uma pesquisa de mestrado que se
            realizou na Universidade de São Paulo, São Paulo, Brasil, nos anos
            de 2017 e 2018.
          </Paragraph>
          <Paragraph>
            Apesar do trabalho de pesquisa ter sido direcionado para alunos de
            violoncelo, muitas das propostas contidas nos jogos podem ser
            desenvolvidas para outros instrumentos e, também, para outros níveis
            de aprendizagem, cabendo a cada professor fazer as adaptações que
            julgar necessárias e efetivas para suas demandas. Além disso, cabem
            muitos desdobramentos das propostas iniciais, que podem suscitar
            outras ideias e perspectivas de trabalho.
          </Paragraph>
          <Paragraph>Boa diversão e boas aprendizagens!</Paragraph>
          <Title>Sobre a autora</Title>
          <Paragraph>
            Meu nome é Marta Macedo Brietzke e sou natural de Porto Alegre, Rio
            Grande do Sul, Brasil. Iniciei meus estudos de música com meu pai e,
            logo após, no Projeto Prelúdio e na Orquestra Infanto-Juvenil da
            Universidade Federal do Rio Grande do Sul, com o violino e o
            violoncelo. Me graduei em Música nessa mesma universidade, fazendo
            minha pós-graduação em São Paulo, na Universidade de São Paulo.
          </Paragraph>
          <Paragraph>
            Atuei como instrumentista e como professora em orquestras e projetos
            sociais da capital e da região metropolitana do meu estado. Em
            conjunto com alguns alunos de violoncelo, fundamos em Porto Alegre
            um espaço autogestionado de ensino e aprendizagem do violoncelo,
            denominado Filarmônica de Violoncelos-Tchêllistas. Minha área de
            pesquisa se relaciona ao ensino coletivo de instrumentos musicais,
            abordando distintas possibilidades e facetas. Também me dedico à
            performance de música contemporânea de concerto, fazendo a estreia
            de algumas peças de compositores brasileiros.
          </Paragraph>
          <Paragraph>
            {`Minha `}
            <strong>dissertação</strong>
            {` está disponível `}
            <S.Link
              target="_blank"
              rel="noopener noreferrer"
              href={dissertation}
            >
              aqui
            </S.Link>
            .
          </Paragraph>
          <Title>
            {`Entre em contato `}
            <S.Link target="_blank" href="mailto:martabrietzke@gmail.com">
              aqui
            </S.Link>
          </Title>
        </S.Content>

        <S.SideArea>
          <S.ImgTopRight />
          {isDesktopScreen && <S.ImgBottomRight />}
        </S.SideArea>
      </S.Container>
    </>
  )
}
