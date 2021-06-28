import React from 'react'
import dissertation from 'assets/texts/DissertacaoMartaMacedoBrietzke.pdf'
import HeaderTitle from 'components/HeaderTitle'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'

import { Link } from './styles'

export default function SectionKnowledge() {
  return (
    <>
      <HeaderTitle isAboutPage>Saiba mais</HeaderTitle>
      <Paragraph>
        Este site foi pensado para professores de violoncelo de alunos iniciantes de desenvolvimento
        instrumental, que utilizam abordagens de ensino coletivo. É um produto de uma pesquisa de
        mestrado que se realizou na Universidade de São Paulo, São Paulo, Brasil, nos anos de 2017 e
        2018.
      </Paragraph>
      <Paragraph>
        Apesar do trabalho de pesquisa ter sido direcionado para alunos de violoncelo, muitas das
        propostas contidas nos jogos podem ser desenvolvidas para outros instrumentos e, também,
        para outros níveis de aprendizagem, cabendo a cada professor fazer as adaptações que julgar
        necessárias e efetivas para suas demandas. Além disso, cabem muitos desdobramentos das
        propostas iniciais, que podem suscitar outras ideias e perspectivas de trabalho.
      </Paragraph>
      <Paragraph>Boa diversão e boas aprendizagens!</Paragraph>

      <Title>Sobre a autora</Title>
      <Paragraph>
        Meu nome é Marta Macedo Brietzke e sou natural de Porto Alegre, Rio Grande do Sul, Brasil.
        Iniciei meus estudos de música com meu pai e, logo após, no Projeto Prelúdio e na Orquestra
        Infanto-Juvenil da Universidade Federal do Rio Grande do Sul, com o violino e o violoncelo.
        Me graduei em Música nessa mesma universidade, fazendo minha pós-graduação em São Paulo, na
        Universidade de São Paulo.
      </Paragraph>
      <Paragraph>
        Atuei como instrumentista e como professora em orquestras e projetos sociais da capital e da
        região metropolitana do meu estado. Em conjunto com alguns alunos de violoncelo, fundamos em
        Porto Alegre um espaço autogestionado de ensino e aprendizagem do violoncelo, denominado
        Filarmônica de Violoncelos-Tchêllistas. Minha área de pesquisa se relaciona ao ensino
        coletivo de instrumentos musicais, abordando distintas possibilidades e facetas. Também me
        dedico à performance de música contemporânea de concerto, fazendo a estreia de algumas peças
        de compositores brasileiros.
      </Paragraph>

      <Paragraph>
        {`Minha `}
        <strong>dissertação</strong>
        {` está disponível `}
        <Link target="_blank" rel="noopener noreferrer" href={dissertation}>
          aqui
        </Link>
        .
      </Paragraph>
      <br />
    </>
  )
}
