import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useParams } from 'react-router-dom'
import gameList, { Game as GameProps } from '../../assets/texts/games'
import * as C from '../../components'
import * as S from './styles'

export default function Game() {
  const { id } = useParams() as { id: string }
  const [windowWith, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  const getSelectedGame = (gameID: string) => {
    return gameList.filter((game) => game.id === gameID)[0]
  }

  const game = getSelectedGame(id) as GameProps

  return (
    <>
      <C.Navbar />
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

            // eslint-disable-next-line no-console
            if (item.flags.includes('audio'))
              return (
                <div key={index}>
                  <ReactAudioPlayer
                    style={{ width: '100%' }}
                    controls
                    src={item.audio}
                  />
                </div>
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
