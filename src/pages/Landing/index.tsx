import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Carousel from '../../components/Carousel'
import gameList, { Game } from '../../assets/texts/games'
import * as S from './styles'

export default function Landing() {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

<<<<<<< HEAD
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    console.log(windowWith)
  }, [])
=======
  const handleClick = (game: string) => push(`game/${game}`)
>>>>>>> c3fd3c5bb66a6c7a95e9f22e3ebd14e96dfa6c35

  const renderButton = (g: Game) => (
    <Button key={g.id} title={g.gameTitle} onClick={() => handleClick(g.id)} />
  )

  const renderTitle = () => (
    <>
      <S.Title>Jogos de improvisação</S.Title>
      <S.SubTitle>para violoncelistas iniciantes</S.SubTitle>
    </>
  )

  const renderImageWithLinks = () => (
    <>
      <S.Image />
      <S.Links>
        <S.Link onClick={() => push('about')}>Saiba mais</S.Link>
        <S.Link onClick={() => push('article')}>Caderno de atividades</S.Link>
      </S.Links>
    </>
  )

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        {windowWith <= 800 ? (
          <>
            {renderTitle()}
            {renderImageWithLinks()}
            <Carousel gameList={gameList} handleClick={handleClick} />
          </>
        ) : (
          <>
            <S.LeftSide>
              <S.TitlesContainer>{renderTitle()}</S.TitlesContainer>

              <S.ButtonsContainer>
                <S.Column>
                  {gameList.slice(0, 5).map((g: Game) => renderButton(g))}
                </S.Column>
                <S.Column>
                  {gameList.slice(5, 10).map((g: Game) => renderButton(g))}
                </S.Column>
              </S.ButtonsContainer>
            </S.LeftSide>

            <S.RightSide>{renderImageWithLinks()}</S.RightSide>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  )
}
