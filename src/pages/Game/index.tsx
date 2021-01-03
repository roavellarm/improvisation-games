import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import gameList, { Game as GameProps } from '../../assets/texts/games'
import * as S from './styles'

export default function Game() {
  const { id } = useParams() as { id: string }

  const getSelectedGame = (gameID: string) => {
    return gameList.filter((game) => game.id === gameID)[0]
  }

  const game = getSelectedGame(id) as GameProps

  return (
    <>
      <Navbar />
      <S.Container>
        <S.SideArea />

        <S.Content>
          <S.HeaderTitle>{game.gameTitle}</S.HeaderTitle>
          {game.content.map((item, index) => {
            if (item.flags.includes('title1'))
              return <S.Title key={index}>{item.text}</S.Title>

            if (item.flags.includes('title2'))
              return <S.SubTitle key={index}>{item.text}</S.SubTitle>

            if (item.flags.includes('paragraph'))
              return <S.Paragraph key={index}>{item.text}</S.Paragraph>

            if (item.flags.includes('itemList'))
              return <S.Item key={index}>{item.text}</S.Item>

            return null
          })}
        </S.Content>

        <S.SideArea>
          <S.Image />
          <ScrollToTopButton />
        </S.SideArea>
      </S.Container>
    </>
  )
}
