import React from 'react'
import Button from '../../components/Button'
import * as S from './styles'

export default function Landing() {
  // eslint-disable-next-line no-alert
  const msg = () => alert('You clicked me!')
  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftSide>
          <S.TitlesContainer>
            <S.Title>Jogos de improvisação</S.Title>
            <S.SubTitle>para violoncelistas iniciantes</S.SubTitle>
          </S.TitlesContainer>

          <S.ButtonsContainer>
            <S.Column>
              <Button title="Jogo 1" onClick={msg} />
              <Button title="Jogo 2" onClick={msg} />
              <Button title="Jogo 3" onClick={msg} />
              <Button title="Jogo 4" onClick={msg} />
              <Button title="Jogo 5" onClick={msg} />
            </S.Column>
            <S.Column>
              <Button title="Jogo 6" onClick={msg} />
              <Button title="Jogo 7" onClick={msg} />
              <Button title="Jogo 8" onClick={msg} />
              <Button title="Jogo 9" onClick={msg} />
              <Button title="Jogo 10" onClick={msg} />
            </S.Column>
          </S.ButtonsContainer>
        </S.LeftSide>

        <S.RightSide>
          <S.Image />

          <S.Links>
            <S.Link onClick={msg}>Saiba mais</S.Link>
            <S.Link onClick={msg}>Caderno de atividades</S.Link>
          </S.Links>
        </S.RightSide>
      </S.Container>
    </S.Wrapper>
  )
}
