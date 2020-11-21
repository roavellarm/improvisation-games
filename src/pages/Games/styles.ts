import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  height: calc(100vh - 4.2rem);
  max-height: 100%;
  max-width: 300px;
`
export const Image = styled.img`
  width: 40px;
  margin-left: 20px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 2rem;
  width: 300px;
  padding-bottom: 10px;
  padding-left: 5px;

  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 2.5rem;
    width: 800px;
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
`
export const BodyContainer = styled.div`
  width: 79vw;
  height: 110vh;
  /* background: lightgrey; */
`
