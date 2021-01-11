import styled from 'styled-components'

interface Props {
  anchor?: boolean
}

export const Title = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 3rem 0px;
  padding-top: ${({ anchor }) => anchor && '70px'};
  margin-top: ${({ anchor }) => anchor && '-70px'};

  @media screen and (max-width: 1000px) {
    font-size: 1.875rem;
    margin: 2rem 0px;
  }
`
