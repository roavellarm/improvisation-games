import React from 'react'
import { Container, Option } from './styles'

export default function Header() {
  return (
    <Container>
      <Option to="/">Sobre</Option>
      <Option to="/games">JogoTemp</Option>
      <Option to="/">Artigo</Option>
      <Option to="/">Contato</Option>
    </Container>
  )
}
