import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import leaf from 'assets/images/button-image.png'
import { GameIndex } from 'types'
import * as S from './styles'

type CustomArrow = {
  type: string
  onClick: () => void
  isEdge: boolean
}

const customArrow = ({ type, onClick, isEdge }: CustomArrow) => {
  const pointer = type === 'PREV' ? '<' : '>'
  return (
    <S.Arrow onClick={onClick} isEdge={isEdge}>
      {pointer}
    </S.Arrow>
  )
}

type CustomPagination = {
  pages: number[]
  activePage: number
  onClick: (i: string) => void // eslint-disable-line
}

const customPagination = ({ pages, activePage, onClick }: CustomPagination) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {pages.map((page: any) => {
      const isActivePage = activePage === page

      return <S.GamesStepper key={page} onClick={() => onClick(page)} isActive={isActivePage} />
    })}
  </div>
)

export default function Caroussel({ gameList }: { gameList: GameIndex[] }) {
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
