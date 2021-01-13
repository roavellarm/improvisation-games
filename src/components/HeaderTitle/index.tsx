import React from 'react'
import { StyledHeaderTitle } from './styles'

export type Props = {
  children: string
  isAboutPage?: boolean
}

export default function HeaderTitle({ children, isAboutPage }: Props) {
  return (
    <StyledHeaderTitle id={`${children}`} isAboutPage={isAboutPage}>
      {children}
    </StyledHeaderTitle>
  )
}

HeaderTitle.defaultProps = {
  isAboutPage: false,
}
