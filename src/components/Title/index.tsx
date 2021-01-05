import React from 'react'
import styled from 'styled-components'

export const Styledtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 3rem 0px;

  @media screen and (max-width: 1000px) {
    font-size: 1.875rem;
    margin: 2rem 0px;
  }
`

export default function title({ content }: { content: string }) {
  return <Styledtitle>{content}</Styledtitle>
}
