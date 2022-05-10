import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Game } from 'types'
import Button from 'components/Button'
import Carousel from 'components/Carousel'
import { LanguageSelector } from 'components/LanguageSelector'
import gameList from 'assets/texts/games'
import { useLanguage } from 'contexts/LanguageContext'
import { english, portuguese } from './text'
import * as S from './styles'

const TEXTS: any = {
  pt: portuguese,
  en: english,
}

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [text, setText] = useState(portuguese)
  const { push } = useHistory()
  const { language } = useLanguage()

  const isMobileScreen = useMemo(() => windowWidth <= 800, [windowWidth])

  const handleClick = (game: string) => push(`/game/${game}`)

  const renderButton = (g: Game) => (
    <Button key={g.id} title={g.gameTitle} onClick={() => handleClick(g.id)} />
  )

  const renderTitle = () => (
    <>
      <S.Title>{text.title}</S.Title>
      <S.SubTitle>{text.subtitle}</S.SubTitle>
    </>
  )

  const renderImageWithLinks = () => (
    <>
      <S.Image />
      <S.Links>
        <S.Link onClick={() => push('quarantine-games')}>{text.quarantineLink}</S.Link>
        <S.Link onClick={() => push('about')}>{text.aboutLink}</S.Link>
        <S.Link onClick={() => push('article')}>{text.articleLink}</S.Link>
      </S.Links>
    </>
  )

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  const handleLanguage = useCallback(() => setText(TEXTS[`${language}`]), [language])

  useEffect(() => {
    handleLanguage()
  }, [handleLanguage])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <S.Wrapper>
      <LanguageSelector />
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
