import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    max-width: 700px;
    padding: 8px;
  }
`

export const Header = styled.h1`
  margin-top: 2rem;
  text-align: center;
  color: #e1e1e1;

  @media screen and (max-width: 700px) {
    margin-top: 10px;
    font-size: x-large;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 700px;
`

export const TextContainer = styled.div`
  background: #1d1d1d;
  border-radius: 0.4rem;
  max-width: 700px;
  width: 100%;
  height: 100%;
  margin: 2rem 5rem;
  padding: 1.5rem;

  @media screen and (max-width: 700px) {
    padding: 10px;
    margin: 10px 10px;
  }
`

export const Title = styled.h3`
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: medium;
  }
`

export const Text = styled.p`
  text-align: left;
  color: #e1e1e1;
  font-size: 18px;
  line-height: 30px;
`
