import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useParams, useHistory } from 'react-router-dom'
import gameList, { Game as GameProps } from '../../assets/texts/games'
import * as C from '../../components'
import * as S from './styles'

export default function Game() {
  const { id } = useParams() as { id: string }
  const { push } = useHistory()
  const [windowWith, setWindowWidth] = useState(window.innerWidth)
  const [game, setGame] = useState<GameProps>({
    id: '',
    gameTitle: '',
    content: [],
  })

  const getSelectedGame = (gameID: string) => {
    return gameList.filter((currentGame) => currentGame.id === gameID)[0]
  }

  useEffect(() => {
    const currentGame = getSelectedGame(id) as GameProps
    if (currentGame === undefined) return push('/*')
    setGame(currentGame)
    window.scrollTo({ top: 0 })
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return () =>
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth)
      )
  }, [id, push])

  return (
    <>
      <C.Navbar isGamePage />
      <S.Container>
        {windowWith > 900 && <S.SideArea />}

        <S.Content>
          <C.HeaderTitle>{game.gameTitle}</C.HeaderTitle>
          {game.content.map((item, index) => {
            if (item.flags.includes('title1'))
              return <C.Title key={index}>{item.text}</C.Title>

            if (item.flags.includes('title2'))
              return <C.SubTitle key={index}>{item.text}</C.SubTitle>

            if (item.flags.includes('paragraph'))
              return <C.Paragraph key={index}>{item.text}</C.Paragraph>

            if (item.flags.includes('itemList'))
              return <C.ItemList key={index}>{item.text}</C.ItemList>

            if (item.flags.includes('audio'))
              return (
                <ReactAudioPlayer
                  key={index}
                  style={{ width: '100%', marginTop: '1rem', outline: 'none' }}
                  controls
                  title={`Exemplo ${game.gameTitle}`}
                  src={item.audio}
                />
              )

            return null
          })}
        </S.Content>

        {windowWith > 900 ? (
          <S.SideArea>
            <S.Image />
            <C.ScrollToTopButton />
          </S.SideArea>
        ) : (
          <>
            <S.Image />
            <C.ScrollToTopButton />
          </>
        )}
      </S.Container>
    </>
  )
}
