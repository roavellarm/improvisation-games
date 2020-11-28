import React from 'react'
import styled from 'styled-components'

const StyledTitle3 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-bottom: 50px;
  }
`

export default function Title3({ children }: { children: string }) {
  return <StyledTitle3>{children}</StyledTitle3>
}
