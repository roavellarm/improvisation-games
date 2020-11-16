import React from 'react'
import styled from 'styled-components'

const StyledTitle1 = styled.p`
  font-size: 17px;
  font-weight: bold;
`
export default function Title1({ children }: { children: string }) {
  return <StyledTitle1>{children}</StyledTitle1>
}
