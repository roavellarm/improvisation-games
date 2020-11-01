import React from 'react'
import Stepper from '../../components/Stepper'
import * as S from './styles'
import backgroundImg from '../../assets/background.png'
import Header from '../Header/Header'

export default function Home() {
  return (
    <>
      <Header />

      <S.Container>
        <S.ImageContainer>
          <S.Image src={backgroundImg} />
        </S.ImageContainer>
        <S.Title>Jogos de improvisação pra violoncelistas iniciantes</S.Title>
        {/* <Caroussel>
        <Card title="1" image={backgroundImg} />
        <Card title="2" image={backgroundImg} />
        <Card title="3" image={backgroundImg} />
        <Card title="4" image={backgroundImg} />
        <Card title="5" image={backgroundImg} />
        <Card title="6" image={backgroundImg} />
        <Card title="7" image={backgroundImg} />
        <Card title="8" image={backgroundImg} />
      </Caroussel> */}
        <Stepper />
      </S.Container>
    </>
  )
}
