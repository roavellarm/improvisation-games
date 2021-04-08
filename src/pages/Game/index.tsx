import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import loadable from 'loadable-components'

import gameList, { Game as GameProps } from 'assets/texts/games'
import * as S from './styles'

const HeaderTitle = loadable(() => import('components/HeaderTitle'))
const ItemList = loadable(() => import('components/ItemList'))
const Navbar = loadable(() => import('components/Navbar'))
const Paragraph = loadable(() => import('components/Paragraph'))
const ScrollToTopButton = loadable(() => import('components/ScrollToTopButton'))
const SubTitle = loadable(() => import('components/SubTitle'))
const Title = loadable(() => import('components/Title'))
const AudioPlayer = loadable(() => import('components/AudioPlayer'))

export default function Game() {
  const { id } = useParams() as { id: string }
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)
  const [game, setGame] = useState<GameProps>({
    id: '',
    gameTitle: '',
    content: [],
  })

  const showSideArea = useMemo(() => windowWith > 900, [windowWith])

  const getSelectedGame = (gameID: string) => {
    return gameList.filter((currentGame) => currentGame.id === gameID)[0]
  }

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const currentGame = getSelectedGame(id) as GameProps
    if (currentGame === undefined) push('/*')
    setGame(currentGame)
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [id, push])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [updateWindowWidth])

  return (
    <>
      <Navbar isGamePage />
      <S.Container>
        {showSideArea && <S.SideArea />}

        <S.Content>
          <HeaderTitle>{game.gameTitle}</HeaderTitle>
          {game.content.map((item, index) => {
            if (item.style.includes('title1'))
              return <Title key={index}>{item.text}</Title>

            if (item.style.includes('title2'))
              return <SubTitle key={index}>{item.text}</SubTitle>

            if (item.style.includes('paragraph'))
              return <Paragraph key={index}>{item.text}</Paragraph>

            if (item.style.includes('itemList'))
              return <ItemList key={index}>{item.text}</ItemList>

            if (item.style.includes('audio'))
              return (
                <AudioPlayer
                  key={index}
                  title={game.gameTitle}
                  src={item.audio}
                />
              )

            return null
          })}
        </S.Content>

        {showSideArea ? (
          <S.SideArea>
            <S.Image />
            <ScrollToTopButton />
          </S.SideArea>
        ) : (
          <>
            <S.Image />
            <ScrollToTopButton />
          </>
        )}
      </S.Container>
    </>
  )
}
