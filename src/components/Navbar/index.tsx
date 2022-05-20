import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { gameListPt } from 'assets/texts/games-pt'
import { gameOptions } from 'helpers/game'
import { anchors } from 'pages/Article/anchors'
import { anchorsPt, anchorsEn, anchorsEs } from 'pages/QuarantineGames/anchors'
import { useLanguage } from 'contexts/LanguageContext'
import CarousselNavbar from '../CarouselNavbar'
import Dropdown from '../Drodown'
import * as S from './styles'

export type NavbarProps = {
  currentPage?: string
}

const INITIAL_STATE = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
}

const ANCHORS: any = {
  pt: anchorsPt,
  en: anchorsEn,
  es: anchorsEs,
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(INITIAL_STATE.windowWidth)
  const [windowHeight, setWindowHeight] = useState(INITIAL_STATE.windowHeight)
  const { language } = useLanguage()

  const TEXT: any = {
    pt: 'Voltar',
    en: 'Go back',
    es: 'Volver',
  }

  const TOPIC: any = {
    pt: 'Tópicos',
    en: 'Topics',
    es: 'Temas',
  }
  const renderGamesOptions = () => {
    if (windowWith > 700) return <CarousselNavbar gameList={gameListPt} />
    return <Dropdown title="Jogos" options={gameOptions} />
  }

  const renderArticleOptions = () =>
    windowWith <= 800 || windowHeight <= 645 ? (
      <Dropdown title={TOPIC[`${language}`]} isArticleStyle options={anchors} />
    ) : null

  const renderQuarantineGamesOptions = () =>
    windowWith <= 800 || windowHeight <= 645 ? (
      <Dropdown title={TOPIC[`${language}`]} isArticleStyle options={ANCHORS[language]} />
    ) : null

  type PagesMenus = {
    [key: string]: ReactElement | null
  }

  const pagesMenus: PagesMenus = {
    articlePage: renderArticleOptions(),
    gamePage: renderGamesOptions(),
    quarantineGamesPage: renderQuarantineGamesOptions(),
  }

  const updateWindowSize = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [updateWindowSize])

  return (
    <S.StyledNavbar>
      <S.Line />
      <S.Container isGamePage={currentPage === 'gamePage' || false}>
        <S.SideArea onClick={() => push('/')}>{`<- ${TEXT[language]}`}</S.SideArea>
        <S.Spacer>{pagesMenus[`${currentPage}`]}</S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.StyledNavbar>
  )
}

Navbar.defaultProps = {
  currentPage: '',
}

export default Navbar
