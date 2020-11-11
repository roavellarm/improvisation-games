/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'

interface LineProps {
  children: string
  bold: boolean
  italic: boolean
}

const StyledLine = styled.p<LineProps>`
  font-style: ${({ italic }: { italic: boolean }) =>
    italic ? 'italic' : 'normal'};

  font-weight: ${({ bold }: { bold: boolean }) => (bold ? 'bold' : 'regular')};
`

interface Props {
  children: string
  bold?: boolean
  italic?: boolean
}

export default function Line({ children, bold, italic }: Props) {
  return (
    <StyledLine bold={bold || false} italic={italic || false}>
      {children}
    </StyledLine>
  )
}
