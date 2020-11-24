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

export const ContainerAll = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  padding: 1.5rem;
  padding-top: 0px;
  /* background: blue; */
  height: calc(100vh - 4.2rem);
  max-height: 100%;
  max-width: 500px;
  text-align: center;
`
export const SpaceContainer = styled.div`
  /* @media screen and (min-width: 700px) {
    width: 500px;
    height: 50px;
    background: yellow;
    display: flex;
    flex-direction: row;
  } */
`

export const Image = styled.img`
  height: auto;
  width: 80%;

  @media screen and (min-width: 700px) {
    padding-top: 130px;
  }
`
export const MyLink = styled(Link)`
  @media screen and (min-width: 700px) {
    padding-top: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
`

export const Option = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  line-height: 3rem;

  @media screen and (min-width: 700px) {
    padding-bottom: 20px;
  }
`
