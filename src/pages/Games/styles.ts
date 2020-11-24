import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  height: 97vh;
  width: 70vw;
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
  width: 40px;
  margin-left: 20px;
`
export const MyLink = styled(Link)`
  @media screen and (min-width: 700px) {
    padding-top: 10px;
  }
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 2rem;
  width: 100%;
  padding-bottom: 10px;
  padding-left: 5px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 2.5rem;
    width: 950px;
  }
`

export const GameList = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 3rem;
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
export const BodyContainer = styled.div`
  width: 80%;
  height: 110vh;
  /* background: lightgrey; */
`
