import styled from 'styled-components'
import { Props } from './index'

export const StyledHeaderTitle = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme, isAboutPage }) => (isAboutPage ? theme.colors.greenDark : theme.colors.black)};
  margin-bottom: ${({ isAboutPage }) => !isAboutPage && '3rem'};

  @media screen and (max-width: 1000px) {
    font-size: 2.625rem;
    text-align: ${({ isAboutPage }) => (isAboutPage ? 'left' : 'center')};
    margin-bottom: 2rem;
  }
`
