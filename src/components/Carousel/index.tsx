import React from 'react'
import Carousel from 'react-elastic-carousel'
import leaf from '../../assets/button-image.png'
import * as S from './styles'

export default function Caroussel() {
  return (
    <S.Container>
      <Carousel>
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
      </Carousel>
    </S.Container>
  )
}
