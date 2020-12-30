import React from 'react'
import { Circle, Container } from './styles'

export default function Stepper() {
  return (
    <Container>
      <Circle status="visited" />
      <Circle status="visited" />
      <Circle status="visited" />
      <Circle status="current" />
      <Circle status="not-visited" />
    </Container>
  )
}
