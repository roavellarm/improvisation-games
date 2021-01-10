import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  font-size: 90px;
  color: ${({ theme }) => theme.colors.greenDark};
  text-align: center;
  line-height: 160%;

  @media screen and (max-width: 800px) {
    padding: 3rem;
    font-size: 60px;
  }
`

export default function NotFound() {
  return (
    <Container>
      <Text>PÁGINA INEXISTENTE</Text>
    </Container>
  )
}
