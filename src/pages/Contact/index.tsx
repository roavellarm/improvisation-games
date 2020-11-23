import React from 'react'
import * as S from './styles'
import arrowLeft from '../../assets/images/arrow-left.svg'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>
      <S.Title>martabrietzke@gmail.com</S.Title>
    </S.Container>
  )
}
