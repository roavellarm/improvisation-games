import styled from 'styled-components'
import { SubTitleProps } from './index'

export const SubTitle = styled.h4<SubTitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: ${({ theme, size }) => `${size}px` || theme.fontSize.text};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 2rem 0px;
  padding-top: ${({ anchor }) => (anchor ? '70px' : '1.5rem')};
  margin-top: ${({ anchor }) => (anchor ? '-70px' : '2rem')};

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 1rem 0px;
    padding-top: ${({ anchor }) => (anchor ? '55px' : '0.5rem')};
    margin-top: ${({ anchor }) => (anchor ? '-55px' : '1rem')};
  }
`
