import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode | string
  anchor?: boolean
}

export default function Title({ children, anchor }: Props) {
  return (
    <S.Title id={`${children}`} anchor={anchor}>
      {children}
    </S.Title>
  )
}

Title.defaultProps = {
  anchor: false,
}
