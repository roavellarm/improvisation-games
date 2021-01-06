import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const StyledSubTitle = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 2rem 0px;
  padding-top: 1.5rem;

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 1rem 0px;
    padding-top: 0.5rem;
  }
`

export default function SubTitle({ children }: { children: ReactNode }) {
  return <StyledSubTitle>{children}</StyledSubTitle>
}
