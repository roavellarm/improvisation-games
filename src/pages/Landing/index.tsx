import React from 'react'
import Button from '../../components/Button'
import image from '../../assets/cello-image.svg'
import * as S from './styles'

export default function Landing() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftSide>
          <S.TitlesContainer>
            <S.Title>Jogos de improvisação</S.Title>
            <br />
            <S.SubTitle>para violoncelistas iniciantes</S.SubTitle>
          </S.TitlesContainer>

          <S.ButtonsContainer>
            <S.Column>
              <Button title="Jogo 1" />
              <Button title="Jogo 2" />
              <Button title="Jogo 3" />
              <Button title="Jogo 4" />
              <Button title="Jogo 5" />
            </S.Column>
            <S.Column>
              <Button title="Jogo 6" />
              <Button title="Jogo 7" />
              <Button title="Jogo 8" />
              <Button title="Jogo 9" />
              <Button title="Jogo 10" />
            </S.Column>
          </S.ButtonsContainer>
        </S.LeftSide>

        <S.RightSide>
          <S.Image src={image} />

          <S.Links>
            <S.Link>Saiba mais</S.Link>
            <S.Link>Caderno de atividades</S.Link>
          </S.Links>
        </S.RightSide>
      </S.Container>
    </S.Wrapper>
  )
}
