import React from 'react'
import styled from 'styled-components'

// import theme from '../../styles/theme'

const StyledTitle3 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  margin-left: 10px;
  padding-bottom: 15px;

  /* max-width: 250px; */

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`

export default function Title3({ children }: { children: string }) {
  return <StyledTitle3>{children}</StyledTitle3>
}
