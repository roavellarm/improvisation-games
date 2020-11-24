import React from 'react'
import styled from 'styled-components'
// import theme from '../../styles/theme'

const StyledTitle1 = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  width: 123%;
  margin-left: 10px;
  padding-top: 3px;
  padding-bottom: 20px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    width: 80%;
    justify-content: center;
    padding-bottom: 42px;
    padding-top: 25px;
  }
`
export default function Title1({ children }: { children: string }) {
  return <StyledTitle1>{children}</StyledTitle1>
}
