import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Carousel from '../../components/Carousel'
import * as S from './styles'

const gameList = [
  'Jogo 1',
  'Jogo 2',
  'Jogo 3',
  'Jogo 4',
  'Jogo 5',
  'Jogo 6',
  'Jogo 7',
  'Jogo 8',
  'Jogo 9',
  'Jogo 10',
]

export default function Landing() {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  const handleClick = (game: string) => push(`game/${game}`)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <S.Wrapper>
      {windowWith <= 800 ? (
        <S.Container>
          <S.Title>Jogos de improvisação</S.Title>
          <S.SubTitle>para violoncelistas iniciantes</S.SubTitle>

          <S.Image />

          <S.Links>
            <S.Link onClick={() => push('about')}>Saiba mais</S.Link>
            <S.Link onClick={() => push('article')}>
              Caderno de atividades
            </S.Link>
          </S.Links>

          <Carousel gameList={gameList} handleClick={handleClick} />
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
                <Button title="Jogo 1" onClick={() => handleClick('Jogo 1')} />
                <Button title="Jogo 2" onClick={() => handleClick('Jogo 2')} />
                <Button title="Jogo 3" onClick={() => handleClick('Jogo 3')} />
                <Button title="Jogo 4" onClick={() => handleClick('Jogo 4')} />
                <Button title="Jogo 5" onClick={() => handleClick('Jogo 5')} />
              </S.Column>
              <S.Column>
                <Button title="Jogo 6" onClick={() => handleClick('Jogo 6')} />
                <Button title="Jogo 7" onClick={() => handleClick('Jogo 7')} />
                <Button title="Jogo 8" onClick={() => handleClick('Jogo 8')} />
                <Button title="Jogo 9" onClick={() => handleClick('Jogo 9')} />
                <Button
                  title="Jogo 10"
                  onClick={() => handleClick('Jogo 10')}
                />
              </S.Column>
            </S.ButtonsContainer>
          </S.LeftSide>

          <S.RightSide>
            <S.Image />

            <S.Links>
              <S.Link onClick={() => push('about')}>Saiba mais</S.Link>
              <S.Link onClick={() => push('article')}>
                Caderno de atividades
              </S.Link>
            </S.Links>
          </S.RightSide>
        </S.Container>
      )}
    </S.Wrapper>
  )
}
