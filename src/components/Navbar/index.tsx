/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import gameList from 'assets/texts/games'
import { gameOptions } from 'helpers/game'
import { anchors } from 'helpers/article'
import { QuarentineAnchors } from 'helpers/quarentine/anchors'
import CarousselNavbar from '../CarouselNavbar'
// import Dropdown from '../Drodown'
import DrodownQuarentine from '../DropDownQuarentine'
import * as S from './styles'
import Dropdown from '../Drodown'

export type NavbarProps = {
  isGamePage?: boolean
  isQuarentinePage?: boolean
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
  isQuarentinePage,
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

  const renderQuarentineOptions = () =>
    (windowWith <= 800 || windowHeight <= 645) && (
      <DrodownQuarentine title="Tópicos" isQuarentinePage options={QuarentineAnchors} />
    )

  const updateWindowSize = useCallback(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [updateWindowSize])

  function SelectOptions() {
    if (!isArticlePage) {
      return renderQuarentineOptions()
    }
    return renderArticleOptions()
  }

  return (
    <S.StyledNavbar>
      <S.Line />
      <S.Container isGamePage={isGamePage}>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer>{isGamePage ? renderGamesOptions() : SelectOptions()}</S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.StyledNavbar>
  )
}
