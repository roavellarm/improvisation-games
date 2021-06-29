import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import leaf from 'assets/images/button-image.png'
import { Game } from 'types'
import * as S from './styles'

const customArrow = ({ type, onClick, isEdge }: any) => {
  const pointer = type === 'PREV' ? '<' : '>'
  return (
    <S.Arrow onClick={onClick} isEdge={isEdge}>
      {pointer}
    </S.Arrow>
  )
}

const customPagination = ({ pages, activePage, onClick }: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {pages.map((page: any) => {
        const isActivePage = activePage === page

        return <S.GamesStepper key={page} onClick={() => onClick(page)} isActive={isActivePage} />
      })}
    </div>
  )
}

export default function Caroussel({ gameList }: { gameList: Game[] }) {
  const { push } = useHistory()
  const handleClick = (game: string) => push(`/game/${game}`)

  return (
    <S.Container>
      <Carousel
        itemsToShow={3}
        itemsToScroll={3}
        renderArrow={customArrow}
        renderPagination={customPagination}
      >
        {gameList.map((game) => (
          <S.Card key={game.id} onClick={() => handleClick(game.id)}>
            <S.Title>{game.gameTitle}</S.Title>
            <S.Image src={leaf} />
          </S.Card>
        ))}
      </Carousel>
    </S.Container>
  )
}
