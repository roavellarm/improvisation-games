import React from 'react'
import * as S from './styles'

export default function Games() {
  return (
    <S.Container>
      <S.GoBack to="/">{`<--`}</S.GoBack>
      <S.Title>Jogo de improvisação </S.Title>
    </S.Container>
  )
}
