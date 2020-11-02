import React from 'react'
import * as S from './styles'
import backgroundImg from '../../assets/images/background.png'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'
import gameList from '../../mocks/gameList'

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
