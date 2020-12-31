import React from 'react'
import leaf from '../../assets/button-image.png'
import * as S from './styles'

export default function Carousel() {
  return (
    <S.Container>
      <S.Arrow>{`<`}</S.Arrow>
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
      <S.Arrow>{`>`}</S.Arrow>
    </S.Container>
  )
}
