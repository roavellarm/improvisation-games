import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styles'

export default function Navbar() {
  const { push } = useHistory()

  return (
    <S.Navbar>
      <S.Line />
      <S.Container>
        <S.SideArea onClick={() => push('/')}>{`<- Voltar`}</S.SideArea>
        <S.Spacer />
        <S.SideArea />
      </S.Container>
    </S.Navbar>
  )
}
