import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Carousel from '../../components/Carousel'
import * as S from './styles'

export default function Landing() {
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    console.log(windowWidth)
  }, [])

  // eslint-disable-next-line no-alert
  const msg = () => alert('You clicked me!')

  return (
    <S.Wrapper>
      {windowWidth <= 800 ? (
        <S.Container>
          <S.Title>Jogos de improvisação</S.Title>
          <S.SubTitle>para violoncelistas iniciantes</S.SubTitle>

          <S.Image />

          <S.Links>
            <S.Link onClick={msg}>Saiba mais</S.Link>
            <S.Link onClick={msg}>Caderno de atividades</S.Link>
          </S.Links>

          <Carousel />
        </S.Container>
      ) : (
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
      )}
    </S.Wrapper>
  )
}

// gameList={[
//   'Jogo 1',
//   'Jogo 2',
//   'Jogo 3',
//   'Jogo 4',
//   'Jogo 5',
//   'Jogo 6',
//   'Jogo 7',
//   'Jogo 8',
//   'Jogo 9',
//   'Jogo 10',
// ]}
