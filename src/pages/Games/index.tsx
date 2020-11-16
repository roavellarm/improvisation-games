import React from 'react'
import arrowLeft from '../../assets/images/arrow-left.svg'
import * as S from './styles'
import Stepper from '../../components/Stepper'
import gameList from '../../mocks/gameList'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">
        <img src={arrowLeft} alt="imageArrowLeft" />
      </S.GoBack>
      <S.Title>Jogo de improvisação </S.Title>
      <S.BodyContainer>
        {gameList.map((item) => {
          return <S.GameList key={item.id}>{item.title}</S.GameList>
        })}
      </S.BodyContainer>

      <Stepper />
    </S.Container>
  )
}
