import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import gameList from 'assets/texts/games'
import { gameOptions } from 'helpers/game'
import { anchors } from 'pages/Article/anchors'
import { quarentineAnchors } from 'pages/QuarantineGames/anchors'
import CarousselNavbar from '../CarouselNavbar'
import Dropdown from '../Drodown'
import * as S from './styles'

export type NavbarProps = {
  currentPage?: string
  initialState?: {
    windowWidth: number
    windowHeight: number
  }
}

const INITIAL_STATE = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
}

export default function Navbar({ currentPage = '', initialState = INITIAL_STATE }: NavbarProps) {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(initialState.windowWidth)
  const [windowHeight, setWindowHeight] = useState(initialState.windowHeight)

  const renderGamesOptions = () => {
    if (windowWith > 700) return <CarousselNavbar gameList={gameList} />
    return <Dropdown title="Jogos" options={gameOptions} />
  }

  const renderArticleOptions = () =>
    (windowWith <= 800 || windowHeight <= 645) && (
      <Dropdown title="Tópicos" isArticleStyle options={anchors} />
    )

  const renderQuarantineGamesOptions = () =>
    (windowWith <= 800 || windowHeight <= 645) && (
      <Dropdown title="Tópicos" isArticleStyle options={quarentineAnchors} />
    )

  const pagesMenus: any = {
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
