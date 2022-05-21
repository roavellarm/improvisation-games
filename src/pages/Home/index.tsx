import React, { useCallback, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Carousel from 'components/Carousel'
import { LanguageSelector } from 'components/LanguageSelector'
import { useLanguage } from 'contexts/LanguageContext'
import { GameIndex } from 'types'
import { useScreenSize } from 'contexts/screenSize'
import { english, portuguese, spanish } from './text'
import * as S from './styles'

const TEXTS: any = {
  pt: portuguese,
  en: english,
  es: spanish,
}

export default function Home() {
  const [text, setText] = useState(portuguese)
  const { push } = useHistory()
  const { language } = useLanguage()
  const { isMobile } = useScreenSize()

  const handleClick = (game: string) => push(`/game/${game}`)

  const renderButton = (g: GameIndex) => (
    <Button key={g.id} title={g.gameTitle} onClick={() => handleClick(g.id)} />
  )

  const renderTitle = () => (
    <>
      <S.Title>{text?.title}</S.Title>
      <S.SubTitle>{text?.subtitle}</S.SubTitle>
    </>
  )

  const renderImageWithLinks = () => (
    <>
      <S.Image />
      <S.Links>
        <S.Link onClick={() => push('quarantine-games')}>{text?.quarantineLink}</S.Link>
        <S.Link onClick={() => push('about')}>{text?.aboutLink}</S.Link>
        <S.Link onClick={() => push('article')}>{text?.articleLink}</S.Link>
      </S.Links>
    </>
  )

  const handleLanguage = useCallback(() => setText(TEXTS[`${language}`]), [language])

  useLayoutEffect(() => {
    handleLanguage()
  }, [handleLanguage])

  return (
    <S.Wrapper>
      <LanguageSelector />
      <S.Container>
        {isMobile ? (
          <>
            <S.TitlesContainer>{renderTitle()}</S.TitlesContainer>
            {renderImageWithLinks()}
            <Carousel gameList={text?.games} />
          </>
        ) : (
          <>
            <S.LeftSide>
              <S.TitlesContainer>{renderTitle()}</S.TitlesContainer>

              <S.ButtonsContainer>
                <S.Column>{text?.games?.slice(0, 5).map((g) => renderButton(g))}</S.Column>
                <S.Column>{text?.games?.slice(5, 10).map((g) => renderButton(g))}</S.Column>
              </S.ButtonsContainer>
            </S.LeftSide>

            <S.RightSide>{renderImageWithLinks()}</S.RightSide>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  )
}
