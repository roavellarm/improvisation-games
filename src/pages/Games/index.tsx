import React from 'react'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="Props" />
      </S.GoBack>
      <S.Title>Jogo de improvisação </S.Title>
    </S.Container>
  )
}
