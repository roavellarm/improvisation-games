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
  font-weight: ${({ bold }: { bold: boolean }) => (bold ? 'bold' : 'regular')};
  line-height: 150%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    width: 80%;
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
