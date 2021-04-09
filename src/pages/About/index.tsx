import React, { useCallback, useEffect, useMemo, useState } from 'react'
import loadable from 'loadable-components'
import dissertation from 'assets/texts/DissertacaoMartaMacedoBrietzke.pdf'
import * as S from './styles'

const Navbar = loadable(() => import('components/Navbar'))
const HeaderTitle = loadable(() => import('components/HeaderTitle'))
const Paragraph = loadable(() => import('components/Paragraph'))
const Title = loadable(() => import('components/Title'))

export default function About() {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  const isDesktopScreen = useMemo(() => windowWith > 800, [windowWith])

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
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
          <Title>Recomendações</Title>
          <Paragraph>
            &quot;Eis uma oportuníssima iniciativa da Marta Brietzke! Ao
            compartilhar aqui o seu valioso trabalho, contendo propostas
            criativas dirigidas à educação musical ela instiga e promove também,
            junto a muitos outros educadores, a criação de novas e atuais
            alternativas de se fazer música, interpretar um instrumento musical,
            se relacionar lúdica e lucidamente consigo e com o outro. Abre a
            porta e indica o caminho para que futuros músicos atuantes na
            sociedade sejam competentes em sua profissão, porém, igualmente
            aptos em não tolher seus passos ou pensamentos, nem limitar a vida
            ou o movimento de toda música por estarem conscientes de que é
            justamente isso - a experimentação vivida responsavelmente e não a
            certeza falsamente asseguradora - o que mais importa a todos nós,
            hoje e amanhã.&quot;
          </Paragraph>
          <Title>Carlos Kater</Title>
          <Paragraph>
            &quot;Se você experimentar alguma das propostas dos jogos, não deixe
            de compartilhar comigo. Será muito bom conhecer suas experiências e
            vivências com as atividades!&quot;
          </Paragraph>
          <Title>Marta Brietzke</Title>
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
            <S.Link
              target="_blank"
              href="mailto:martabrietzke@gmail.com?subject=Testing out mailto!&body=This is only a test!"
            >
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
