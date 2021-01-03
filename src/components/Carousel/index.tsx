import React from 'react'
import Carousel from 'react-elastic-carousel'
import leaf from '../../assets/images/button-image.png'
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

        return (
          <S.Stepper
            key={page}
            onClick={() => onClick(page)}
            isActive={isActivePage}
          />
        )
      })}
    </div>
  )
}

interface CarouselProps {
  gameList: string[]
  // eslint-disable-next-line no-unused-vars
  handleClick(game: string): void
}

export default function Caroussel({ gameList, handleClick }: CarouselProps) {
  return (
    <S.Container>
      <Carousel
        itemsToShow={3}
        itemsToScroll={3}
        renderArrow={customArrow}
        renderPagination={customPagination}
      >
        {gameList.map((game: string) => (
          <S.Card key={game} onClick={() => handleClick(game)}>
            <S.Title>{game}</S.Title>
            <S.Image src={leaf} />
          </S.Card>
        ))}
      </Carousel>
    </S.Container>
  )
}
