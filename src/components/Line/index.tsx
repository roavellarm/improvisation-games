import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.greenDark};
  border-radius: 8px;
  margin: 4rem 0px;
`

export default function Line() {
  return <StyledLine />
}
