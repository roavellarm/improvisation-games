import React, { ReactNode } from 'react'
import * as S from './styles'

interface ParagraphProps {
  children: ReactNode
  italic?: boolean
  margin?: boolean
  bold?: boolean
  citation?: boolean
}

export default function Paragraph({
  children,
  italic = false,
  margin = false,
  bold = false,
  citation = false,
}: ParagraphProps) {
  return (
    <S.Paragraph
      id={`${children}`}
      italic={italic}
      margin={margin}
      bold={bold}
      citation={citation}
    >
      {children}
    </S.Paragraph>
  )
}

Paragraph.defaultProps = {
  italic: false,
  margin: false,
  bold: false,
  citation: false,
}
