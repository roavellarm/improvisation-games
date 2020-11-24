import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  height: 97vh;
  width: 80vw;

  max-height: 100%;
  max-width: 100%;
  flex-direction: column;
  padding-left: 18px;

  @media screen and (min-width: 700px) {
    width: 100vw;
    align-items: center;
  }
`

export const Image = styled.img`
  height: auto;
  width: 80%;

  @media screen and (min-width: 700px) {
    padding-top: 130px;
  }
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GoBack = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  padding-top: 15px;

  @media screen and (min-width: 700px) {
    padding-top: 20px;
  }
`
