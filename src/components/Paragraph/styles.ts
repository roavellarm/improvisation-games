import styled from 'styled-components'
import { ParagraphProps } from './index'

export const Paragraph = styled.p<ParagraphProps>`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-size: ${({ theme }) => theme.fontSize.text};
  font-style: ${({ italic }) => italic && 'italic'};
  font-weight: ${({ bold }) => bold && 'bold'};
  line-height: 160%;
  margin: ${({ margin }) => (margin ? '0px' : '2rem 0px')};
  background: ${({ citation }) => citation && `rgba(91, 124, 107, 0.2)`};
  padding: ${({ citation }) => citation && '1rem 2rem'};
  border-radius: ${({ citation }) => citation && '3rem'};
  padding-top: ${({ anchor }) => anchor && '70px'};
  margin-top: ${({ anchor }) => anchor && '-70px'};

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 1rem 0px;
    padding-top: ${({ anchor }) => anchor && '55px'};
    margin-top: ${({ anchor }) => anchor && '-55px'};
  }
`
