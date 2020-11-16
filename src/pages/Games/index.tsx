import React from 'react'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
import Stepper from '../../components/Stepper'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>
      <S.Title>Jogo de improvisação </S.Title>
      <S.BodyContainer>
        <S.Title2>Teste de Titulo de jogos</S.Title2>
      </S.BodyContainer>
      <Stepper />
    </S.Container>
  )
}
