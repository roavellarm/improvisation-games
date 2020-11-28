import React from 'react'
import styled from 'styled-components'

const StyledTitle2 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`

export default function Title2({ children }: { children: string }) {
  return <StyledTitle2>{children}</StyledTitle2>
}
