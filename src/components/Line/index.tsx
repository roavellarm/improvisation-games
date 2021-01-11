import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.greenLight};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.greenLight};
  border-radius: 8px;
  margin: 4rem -0.8rem;
`

export default function Line() {
  return <StyledLine />
}
