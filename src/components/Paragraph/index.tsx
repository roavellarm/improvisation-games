/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  children: string
  bold: boolean
  italic: boolean
}

const StyledParagraph = styled.p<ParagraphProps>`
  font-style: ${({ italic }: { italic: boolean }) =>
    italic ? 'italic' : 'normal'};
  width: 115%;
  margin-left: 10px;
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSize.xs};

  font-weight: ${({ bold }: { bold: boolean }) => (bold ? 'bold' : 'regular')};
  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    width: 260%;
  }
`

interface Props {
  children: string
  bold?: boolean
  italic?: boolean
}

export default function Paragraph({ children, bold, italic }: Props) {
  return (
    <StyledParagraph bold={bold || false} italic={italic || false}>
      {children}
    </StyledParagraph>
  )
}
