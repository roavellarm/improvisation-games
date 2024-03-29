import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Game as GameProps } from 'types'
import { useLanguage } from 'contexts/LanguageContext'
import HeaderTitle from 'components/HeaderTitle'
import ItemList from 'components/ItemList'
import Navbar from 'components/Navbar'
import Paragraph from 'components/Paragraph'
import ScrollToTopButton from 'components/ScrollToTopButton'
import SubTitle from 'components/SubTitle'
import Title from 'components/Title'
import AudioPlayer from 'components/AudioPlayer'
import { useScreenSize } from 'contexts/screenSize'
import { gameListPt } from './games-pt'
import { gameListEn } from './games-en'
import { gameListEs } from './games-es'
import * as S from './styles'

const GAME_LIST: any = {
  pt: gameListPt,
  en: gameListEn,
  es: gameListEs,
}

export default function Game() {
  const { id } = useParams() as { id: string }
  const { push } = useHistory()
  const { language } = useLanguage()
  const [game, setGame] = useState<GameProps>({
    id: '',
    gameTitle: '',
    content: [],
  })
  const { width } = useScreenSize()

  const showSideArea = useMemo(() => width > 900, [width])

  const getSelectedGame = useCallback(
    (gameID: string) =>
      GAME_LIST[language].filter((currentGame: GameProps) => currentGame.id === gameID)[0],
    [language]
  )

  useEffect(() => {
    const currentGame = getSelectedGame(id) as GameProps
    if (currentGame === undefined) push('/*')
    setGame(currentGame)
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [getSelectedGame, id, push])

  return (
    <>
      <Navbar currentPage="gamePage" />
      <S.Container>
        {showSideArea && <S.SideArea />}

        <S.Content>
          <HeaderTitle>{game.gameTitle}</HeaderTitle>
          {game.content.map((item, index) => {
            if (item.style.includes('title1')) return <Title key={index}>{item.text}</Title>

            if (item.style.includes('title2')) return <SubTitle key={index}>{item.text}</SubTitle>

            if (item.style.includes('paragraph'))
              return <Paragraph key={index}>{item.text}</Paragraph>

            if (item.style.includes('itemList')) return <ItemList key={index}>{item.text}</ItemList>

            if (item.style.includes('audio'))
              return <AudioPlayer key={index} title={game.gameTitle} src={item.audio} />

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
