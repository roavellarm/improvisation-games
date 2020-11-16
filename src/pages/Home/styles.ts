import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    width: 100vw;
    align-items: center;
  }
`

export const Content = styled.div`
  margin: 0px 1rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 700px) {
    max-width: 500px;
    width: 100%;
    justify-content: space-between;
  }
`

export const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -999;
  height: calc(100% - 3rem);
  max-width: 100%;
  margin-top: 3rem;
  opacity: 0.3;
`

export const Image = styled.img`
  height: auto;
  width: 80%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.32);
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: white;
`

export const Option = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: white;
`

export const Title = styled.h1`
  padding: 0.5rem 0.8rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  line-height: 3rem;
  color: white;
`
