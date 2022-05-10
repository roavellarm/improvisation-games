import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { gameListPt } from 'assets/texts/games-pt'
import { gameOptions } from 'helpers/game'
import { anchors } from 'pages/Article/anchors'
import { quarentineAnchors } from 'pages/QuarantineGames/anchors'
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

const Navbar = ({ currentPage }: NavbarProps) => {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(INITIAL_STATE.windowWidth)
  const [windowHeight, setWindowHeight] = useState(INITIAL_STATE.windowHeight)

  const renderGamesOptions = () => {
    if (windowWith > 700) return <CarousselNavbar gameList={gameListPt} />
    return <Dropdown title="Jogos" options={gameOptions} />
  }

  const renderArticleOptions = () =>
    windowWith <= 800 || windowHeight <= 645 ? (
      <Dropdown title="Tópicos" isArticleStyle options={anchors} />
    ) : null

  const renderQuarantineGamesOptions = () =>
    windowWith <= 800 || windowHeight <= 645 ? (
      <Dropdown title="Tópicos" isArticleStyle options={quarentineAnchors} />
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
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
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
