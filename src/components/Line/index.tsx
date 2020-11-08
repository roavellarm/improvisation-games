import React from 'react'
import styled from 'styled-components'

const StyledLine = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background: black;
`

export default function Line() {
  return <StyledLine />
}
