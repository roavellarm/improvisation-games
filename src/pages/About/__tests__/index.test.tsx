import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { withTheme } from 'config/testSetup'
import About from '../index'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),
}))

window.scrollTo = jest.fn()

describe('Section Contact content', () => {
  it('should render correctly', () => {
    const { queryByText, queryAllByText } = render(withTheme(<About />))

    expect(queryByText('Me escreva!')).toBeInTheDocument()
    expect(
      queryByText(
        'Se você experimentar alguma das propostas dos jogos, não deixe de compartilhar comigo. Será muito bom conhecer suas experiências e vivências com as atividades!'
      )
    ).toBeInTheDocument()
    expect(queryByText('Entre em contato')).toBeInTheDocument()
    expect(queryAllByText('aqui')).toBeTruthy()
    expect(queryByText('Colaboradores')).toBeInTheDocument()
    expect(queryByText('Samanta Flôor')).toBeInTheDocument()
    expect(queryByText('Rodrigo Avellar de Muniagurria')).toBeInTheDocument()
    expect(queryByText('Gustavo Sohne')).toBeInTheDocument()
  })
})

describe('Section Knowledge content', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<About />))

    expect(
      queryByText(
        'Este site foi pensado para professores de violoncelo de alunos iniciantes de desenvolvimento instrumental, que utilizam abordagens de ensino coletivo. É um produto de uma pesquisa de mestrado que se realizou na Universidade de São Paulo, São Paulo, Brasil, nos anos de 2017 e 2018.'
      )
    ).toBeInTheDocument()
    expect(
      queryByText(
        'Apesar do trabalho de pesquisa ter sido direcionado para alunos de violoncelo, muitas das propostas contidas nos jogos podem ser desenvolvidas para outros instrumentos e, também, para outros níveis de aprendizagem, cabendo a cada professor fazer as adaptações que julgar necessárias e efetivas para suas demandas. Além disso, cabem muitos desdobramentos das propostas iniciais, que podem suscitar outras ideias e perspectivas de trabalho.'
      )
    ).toBeInTheDocument()
    expect(queryByText('Boa diversão e boas aprendizagens!')).toBeInTheDocument()
    expect(queryByText('Sobre a autora')).toBeInTheDocument()
    expect(
      queryByText(
        'Meu nome é Marta Macedo Brietzke e sou natural de Porto Alegre, Rio Grande do Sul, Brasil. Iniciei meus estudos de música com meu pai e, logo após, no Projeto Prelúdio e na Orquestra Infanto-Juvenil da Universidade Federal do Rio Grande do Sul, com o violino e o violoncelo. Me graduei em Música nessa mesma universidade, fazendo minha pós-graduação em São Paulo, na Universidade de São Paulo.'
      )
    ).toBeInTheDocument()
    expect(
      queryByText(
        'Atuei como instrumentista e como professora em orquestras e projetos sociais da capital e da região metropolitana do meu estado. Em conjunto com alguns alunos de violoncelo, fundamos em Porto Alegre um espaço autogestionado de ensino e aprendizagem do violoncelo, denominado Filarmônica de Violoncelos-Tchêllistas. Minha área de pesquisa se relaciona ao ensino coletivo de instrumentos musicais, abordando distintas possibilidades e facetas. Também me dedico à performance de música contemporânea de concerto, fazendo a estreia de algumas peças de compositores brasileiros.'
      )
    ).toBeInTheDocument()
  })
})

describe('Section Recommendation content', () => {
  it('should render correctly', () => {
    const { queryByText } = render(withTheme(<About />))

    expect(
      queryByText(
        'Eis uma oportuníssima iniciativa da Marta Brietzke! Ao compartilhar aqui o seu valioso trabalho, contendo propostas criativas dirigidas à educação musical ela instiga e promove também, junto a muitos outros educadores, a criação de novas e atuais alternativas de se fazer música, interpretar um instrumento musical, se relacionar lúdica e lucidamente consigo e com o outro. Abre a porta e indica o caminho para que futuros músicos atuantes na sociedade sejam competentes em sua profissão, porém, igualmente aptos em não tolher seus passos ou pensamentos, nem limitar a vida ou o movimento de toda música por estarem conscientes de que é justamente isso - a experimentação vivida responsavelmente e não a certeza falsamente asseguradora - o que mais importa a todos nós, hoje e amanhã.'
      )
    ).toBeInTheDocument()
    expect(queryByText('Carlos Kater')).toBeInTheDocument()
  })
})
