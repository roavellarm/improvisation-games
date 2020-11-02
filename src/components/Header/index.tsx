import React from 'react'
import { Container, Navbar, Option } from './styles'

export default function Header() {
  return (
    <Container>
      <Navbar>
        <Option to="/">Sobre</Option>
        <Option to="/games">JogoTemp</Option>
        <Option to="/">Artigo</Option>
        <Option to="/contact">Contato</Option>
      </Navbar>
    </Container>
  )
}
