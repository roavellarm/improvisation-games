import React from 'react'
import Carousel from 'react-elastic-carousel'
import leaf from '../../assets/button-image.png'
import * as S from './styles'

export default function Caroussel() {
  return (
    <S.Container>
      <Carousel itemsToShow={4}>
        <S.Card>
          <S.Title>Jogo 1</S.Title>
          <S.Image src={leaf} />
        </S.Card>
        <S.Card>
          <S.Title>Jogo 2</S.Title>
          <S.Image src={leaf} />
        </S.Card>
        <S.Card>
          <S.Title>Jogo 3</S.Title>
          <S.Image src={leaf} />
        </S.Card>

        <S.Card>
          <S.Title>Jogo 4</S.Title>
          <S.Image src={leaf} />
        </S.Card>

        <S.Card>
          <S.Title>Jogo 5</S.Title>
          <S.Image src={leaf} />
        </S.Card>

        <S.Card>
          <S.Title>Jogo 6</S.Title>
          <S.Image src={leaf} />
        </S.Card>

        <S.Card>
          <S.Title>Jogo 7</S.Title>
          <S.Image src={leaf} />
        </S.Card>
        <S.Card>
          <S.Title>Jogo 8</S.Title>
          <S.Image src={leaf} />
        </S.Card>
        <S.Card>
          <S.Title>Jogo 9</S.Title>
          <S.Image src={leaf} />
        </S.Card>
        <S.Card>
          <S.Title>Jogo 10</S.Title>
          <S.Image src={leaf} />
        </S.Card>
      </Carousel>
    </S.Container>
  )
}
