import React from 'react'
import * as S from './styles'
import backgroundImg from '../../assets/background.png'

export default function Home() {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={backgroundImg} />
      </S.ImageContainer>
      <S.Header>
        <S.Option>Home</S.Option>
        <S.Option>Sobre</S.Option>
        <S.Option>Revista</S.Option>
        <S.Option>Contato</S.Option>
      </S.Header>
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
    </S.Container>
  )
}
