import React, { ReactNode } from 'react'
import * as S from './styles'

export type TitleProps = {
  children: ReactNode | string
  anchor?: boolean
}

export default function Title({ children, anchor }: TitleProps) {
  return (
    <S.Title id={`${children}`} anchor={anchor}>
      {children}
    </S.Title>
  )
}

Title.defaultProps = {
  anchor: false,
}
