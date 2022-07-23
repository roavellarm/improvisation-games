import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { gameOptionsPT, gameOptionsES, gameOptionsEN } from 'helpers/game'
import { anchors } from 'pages/Article/anchors'
import { anchorsPt, anchorsEn, anchorsEs } from 'pages/QuarantineGames/anchors'
import { LO, useLanguage } from 'contexts/LanguageContext'
import { GameIndex } from 'types'
import { useScreenSize } from 'contexts/screenSize'
import CarousselNavbar from '../CarouselNavbar'
import Dropdown from '../Drodown'
import { gameIndexPt, gameIndexEn, gameIndexEs } from './gameIndex'
import * as S from './styles'

export type NavbarProps = {
  currentPage?: string
}

export type AnchorsType = { [key: string]: string[] }

const ANCHORS: AnchorsType = {
  pt: anchorsPt,
  en: anchorsEn,
  es: anchorsEs,
}

const GAMES_INDEX: { [key: string]: GameIndex[] } = {
  pt: gameIndexPt,
  en: gameIndexEn,
  es: gameIndexEs,
}

const GAMES_OPTIONS: any = {
  pt: gameOptionsPT,
  en: gameOptionsEN,
  es: gameOptionsES,
}

const GAMES_TITLE_LANGUAGE: any = {
  pt: 'Jogos',
  en: 'Games',
  es: 'Juegos',
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const { push } = useHistory()
  const { language } = useLanguage()
  const { width, height } = useScreenSize()

  const TEXT: LO = {
    pt: 'Voltar',
    en: 'Go back',
    es: 'Volver',
  }

  const TOPIC: LO = {
    pt: 'Tópicos',
    en: 'Topics',
    es: 'Temas',
  }
  const renderGamesOptions = () => {
    if (width > 700) return <CarousselNavbar gamesIndex={GAMES_INDEX[language]} />
    return <Dropdown title={GAMES_TITLE_LANGUAGE[language]} options={GAMES_OPTIONS[language]} />
  }

  const renderArticleOptions = () =>
    width <= 800 || height <= 645 ? (
      <Dropdown title={TOPIC[language]} isArticleStyle options={anchors} />
    ) : null

  const renderQuarantineGamesOptions = () =>
    width <= 800 || height <= 645 ? (
      <Dropdown title={TOPIC[language]} isArticleStyle options={ANCHORS[language]} />
    ) : null

  type PagesMenus = {
    [key: string]: ReactElement | null
  }

  const pagesMenus: PagesMenus = {
    articlePage: renderArticleOptions(),
    gamePage: renderGamesOptions(),
    quarantineGamesPage: renderQuarantineGamesOptions(),
  }

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
