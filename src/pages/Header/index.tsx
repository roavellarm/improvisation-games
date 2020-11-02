import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Option to="/">Sobre</S.Option>
      <S.Option to="/games">JogoTemp</S.Option>
      <S.Option to="/">Artigo</S.Option>
    </S.Header>
  )
}
