import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: ${({ theme }) => theme.fontSize.text};
  color: ${({ theme }) => theme.colors.text};
  line-height: 158%;
  margin: 2rem 0px;

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 1rem 0px;
  }
`

export default function Paragraph({ children }: { children: ReactNode }) {
  return <StyledParagraph>{children}</StyledParagraph>
}
