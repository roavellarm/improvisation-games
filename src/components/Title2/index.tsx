import React from 'react'
import styled from 'styled-components'

// import theme from '../../styles/theme'

const StyledTitle2 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  /* max-width: 250px; */
`

export default function Title2({ children }: { children: string }) {
  return <StyledTitle2>{children}</StyledTitle2>
}
