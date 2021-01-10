import React, { ReactNode } from 'react'
import * as S from './styles'

interface SubTitleProps {
  children: ReactNode
  size?: number | undefined
}

export default function SubTitle({ children, size }: SubTitleProps) {
  return (
    <S.SubTitle id={`${children}`} size={size || undefined}>
      {children}
    </S.SubTitle>
  )
}

SubTitle.defaultProps = {
  size: undefined,
}
