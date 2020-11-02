import React from 'react'
import Header from '../Header'
import backgroundImg from '../../assets/background.png'
import * as S from './styles'

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
    </S.Container>
  )
}
