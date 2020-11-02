import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  flex-direction: column;
`

export const Content = styled.div`
  margin: 0px 1rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
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
  width: 70%;
  /* -webkit-transform: scaleX(-1);
  transform: scaleX(-1); */
`

export const Title = styled.h1`
  padding: 1.5rem 1rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: right;
  line-height: 3rem;
`
