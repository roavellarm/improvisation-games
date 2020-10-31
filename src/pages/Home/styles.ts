import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  padding-top: 0px;
  /* background: blue; */
  height: calc(100vh - 4.2rem);
  max-height: 100%;
  max-width: 500px;
`

export const ImageContainer = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  margin-left: -1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -999;
  opacity: 0.2;
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
  text-align: right;
  line-height: 3rem;
`
