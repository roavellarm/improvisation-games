import React, { ReactNode, CSSProperties } from 'react'
import * as S from './styles'

export type ParagraphProps = {
  children: ReactNode
  style?: CSSProperties
  italic?: boolean
  margin?: boolean
  bold?: boolean
  citation?: boolean
  anchor?: boolean
}

export default function Paragraph(props: ParagraphProps) {
  const { children, italic, margin, bold, citation, anchor, style } = props

  return (
    <S.Paragraph
      id={`${children}`}
      italic={italic}
      margin={margin}
      bold={bold}
      citation={citation}
      anchor={anchor}
      style={style}
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
  anchor: false,
}
