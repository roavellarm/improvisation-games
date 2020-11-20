import React from 'react'
import styled from 'styled-components'
// import theme from '../../styles/theme'

const StyledTitle1 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  width: 125%;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 280%;
    justify-content: center;
  }
`
export default function Title1({ children }: { children: string }) {
  return <StyledTitle1>{children}</StyledTitle1>
}
