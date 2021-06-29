import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Game } from 'types'
import Button from 'components/Button'
import Carousel from 'components/Carousel'
import gameList from 'assets/texts/games'
import * as S from './styles'

export default function Home() {
  const { push } = useHistory()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobileScreen = useMemo(() => windowWidth <= 800, [windowWidth])

  const handleClick = (game: string) => push(`/game/${game}`)

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
        <S.Link onClick={() => push('quarantine-games')}>Sons da quarentena</S.Link>
        <S.Link onClick={() => push('about')}>Saiba mais</S.Link>
        <S.Link onClick={() => push('article')}>Caderno de atividades</S.Link>
      </S.Links>
    </>
  )

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <S.Wrapper>
      <S.Container>
        {isMobileScreen ? (
          <>
            <S.TitlesContainer>{renderTitle()}</S.TitlesContainer>
            {renderImageWithLinks()}
            <Carousel gameList={gameList} />
          </>
        ) : (
          <>
            <S.LeftSide>
              <S.TitlesContainer>{renderTitle()}</S.TitlesContainer>

              <S.ButtonsContainer>
                <S.Column>{gameList.slice(0, 5).map((g: Game) => renderButton(g))}</S.Column>
                <S.Column>{gameList.slice(5, 10).map((g: Game) => renderButton(g))}</S.Column>
              </S.ButtonsContainer>
            </S.LeftSide>

            <S.RightSide>{renderImageWithLinks()}</S.RightSide>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  )
}
