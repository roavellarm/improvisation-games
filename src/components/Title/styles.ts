import styled from 'styled-components'
import { TitleProps } from './index'

export const Title = styled.p<TitleProps>`
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 3rem 0px;
  padding-top: ${({ anchor }) => anchor && '70px'};
  margin-top: ${({ anchor }) => anchor && '-70px'};

  @media screen and (max-width: 1000px) {
    font-size: 1.875rem;
    margin: 2rem 0px;
    padding-top: ${({ anchor }) => anchor && '55px'};
    margin-top: ${({ anchor }) => anchor && '-55px'};
  }
`
