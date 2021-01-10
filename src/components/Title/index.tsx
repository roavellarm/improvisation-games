import React, { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode | string
}

export default function Title({ children }: Props) {
  return <S.Title id={`${children}`}>{children}</S.Title>
}
