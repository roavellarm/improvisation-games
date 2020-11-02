import React from 'react'
import * as S from './styles'
import backgroundImg from '../../assets/images/background.png'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'

const gameList = [
  {
    id: 1,
    title: 'Jogo1',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 2,
    title: 'Jogo2',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 3,
    title: 'Jogo3',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 4,
    title: 'Jogo4',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 5,
    title: 'Jogo5',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 6,
    title: 'Jogo6',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 7,
    title: 'Jogo7',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 8,
    title: 'Jogo8',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 9,
    title: 'Jogo9',
    image: 'https://source.unsplash.com/random/100x100',
  },
  {
    id: 10,
    title: 'Jogo10',
    image: 'https://source.unsplash.com/random/100x100',
  },
]

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.ImageContainer>
        <S.Image src={backgroundImg} />
      </S.ImageContainer>
      <S.Content>
        <S.Title>Jogos de improvisação pra violoncelistas iniciantes</S.Title>
      </S.Content>
      <Carousel gameList={gameList} />
    </S.Container>
  )
}
