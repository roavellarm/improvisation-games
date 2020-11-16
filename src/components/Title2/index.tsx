import React from 'react'
import styled from 'styled-components'

// import theme from '../../styles/theme'

const StyledTitle2 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
`

export default function Title2({ children }: { children: string }) {
  return <StyledTitle2>{children}</StyledTitle2>
}
