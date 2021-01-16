import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import gameList from '../../assets/texts/games'
import { gameOptions } from '../../helpers/game'
import { anchors } from '../../helpers/article'
import CarousselNavbar from '../CarouselNavbar'
import Dropdown from '../Drodown'
import * as S from './styles'

export type NavbarProps = {
  isGamePage?: boolean
  isArticlePage?: boolean
}

export default function Navbar({ isGamePage, isArticlePage }: NavbarProps) {
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const renderGamesOptions = () => {
    if (windowWith > 700) return <CarousselNavbar gameList={gameList} />
    return <Dropdown title="Jogos" options={gameOptions} />
  }

  const renderArticleOptions = () => {
    if (windowWith <= 800 || windowHeight <= 645)
      return <Dropdown title="Tópicos" isArticlePage options={anchors} />
    return undefined
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
      <S.Container isGamePage={isGamePage}>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer>
          {isGamePage
            ? renderGamesOptions()
            : isArticlePage && renderArticleOptions()}
        </S.Spacer>
        <S.SideArea />
      </S.Container>
    </S.StyledNavbar>
  )
}
