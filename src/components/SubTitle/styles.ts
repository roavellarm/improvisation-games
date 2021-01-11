import styled, { DefaultTheme } from 'styled-components'

interface Props {
  theme: DefaultTheme
  size?: number | undefined
  anchor?: boolean
}

export const SubTitle = styled.h4<Props>`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: ${({ theme, size }) => `${size}px` || theme.fontSize.text};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 2rem 0px;
  padding-top: ${({ anchor }) => (anchor ? '70px' : '1.5rem')};
  margin-top: ${({ anchor }) => (anchor ? '-70px' : '2rem')};

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 1rem 0px;
    padding-top: 0.5rem;
  }
`
