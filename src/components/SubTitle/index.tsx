import React, { ReactNode } from 'react'
import * as S from './styles'

export type SubTitleProps = {
  children: ReactNode
  size?: number | undefined
  anchor?: boolean
}

export default function SubTitle({ children, size, anchor }: SubTitleProps) {
  return (
    <S.SubTitle id={`${children}`} size={size || undefined} anchor={anchor}>
      {children}
    </S.SubTitle>
  )
}

SubTitle.defaultProps = {
  size: undefined,
  anchor: false,
}
