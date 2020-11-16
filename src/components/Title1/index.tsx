import React from 'react'
import styled from 'styled-components'
// import theme from '../../styles/theme'

const StyledTitle1 = styled.p`
  /* font-size: ${({ theme }) => theme.fontSize.lg}; */
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.background};
`
export default function Title1({ children }: { children: string }) {
  return <StyledTitle1>{children}</StyledTitle1>
}
