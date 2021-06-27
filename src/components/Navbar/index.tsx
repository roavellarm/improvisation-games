/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import gameList from 'assets/texts/games'
import { gameOptions } from 'helpers/game'
import { anchors } from 'helpers/article'
import { QuarentineAnchors } from 'helpers/quarentine/anchors'
import CarousselNavbar from '../CarouselNavbar'
import * as S from './styles'
import Dropdown from '../Drodown'

export type NavbarProps = {
  isGamePage?: boolean
  isArticlePage?: boolean
  initialState?: {
    windowWidth: number
    windowHeight: number
  }
}

const INITIAL_STATE = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
}

export default function Navbar({
  isGamePage,
  isArticlePage,
  initialState = INITIAL_STATE,
}: NavbarProps) {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(initialState.windowWidth)
  const [windowHeight, setWindowHeight] = useState(initialState.windowHeight)

  const renderGamesOptions = () => {
    if (windowWith > 700) return <CarousselNavbar gameList={gameList} />
    return <Dropdown title="Jogos" options={gameOptions} />
  }

  const renderArticleOptions = () =>
    (windowWith <= 800 || windowHeight <= 645) && (
      <Dropdown title="Tópicos" isArticlePage options={anchors} />
    )

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
      <S.Container isGamePage={isGamePage}>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer>
          {isGamePage ? renderGamesOptions() : isArticlePage && renderArticleOptions()}
        </S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.StyledNavbar>
  )
}
