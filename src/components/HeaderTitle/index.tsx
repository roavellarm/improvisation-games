import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

interface StyledProps {
  theme: DefaultTheme
  isAboutPage: boolean
}

export const StyledHeaderTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme, isAboutPage }: StyledProps) =>
    isAboutPage ? theme.colors.greenDark : theme.colors.black};
  margin-bottom: 3rem;

  @media screen and (max-width: 1000px) {
    font-size: 2.625rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`
interface Props {
  children: string
  isAboutPage?: boolean
}

export default function title({ children, isAboutPage }: Props) {
  return (
    <StyledHeaderTitle isAboutPage={isAboutPage || false}>
      {children}
    </StyledHeaderTitle>
  )
}
