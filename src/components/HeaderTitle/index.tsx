import React from 'react'
import styled from 'styled-components'

export const StyledHeaderTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem;

  @media screen and (max-width: 1000px) {
    font-size: 2.625rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`

export default function title({ content }: { content: string }) {
  return <StyledHeaderTitle>{content}</StyledHeaderTitle>
}
