import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'
import { Game } from '../../assets/texts/games'
import * as S from './styles'

const customArrow = ({ type, onClick, isEdge }: any) => {
  const pointer = type === 'PREV' ? '<' : '>'
  return (
    <S.Arrow onClick={onClick} isEdge={isEdge}>
      {pointer}
    </S.Arrow>
  )
}

export default function CarousselNavBar({ gameList }: { gameList: Game[] }) {
  const { push } = useHistory()
  const handleClick = (game: string) => push(`/game/${game}`)

  return (
    <S.Container>
      <Carousel
        itemsToShow={4}
        itemsToScroll={4}
        renderArrow={customArrow}
        pagination={false}
      >
        {gameList.map((game) => (
          <S.Card key={game.id} onClick={() => handleClick(game.id)}>
            <S.Title>{game.gameTitle}</S.Title>
          </S.Card>
        ))}
      </Carousel>
    </S.Container>
  )
}
