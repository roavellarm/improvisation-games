import styled from 'styled-components'
import celloImg from '../../assets/images/cello-game-page.png'
import birdImg from '../../assets/images/bird-mobile.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
  padding-bottom: 3rem;

  @media screen and (max-width: 800px) {
    padding: 0px 0.9rem 2rem 0.9rem;
  }
`

export const SideArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ stepper = false }: { stepper?: boolean }) =>
    stepper ? 'flex-end' : 'flex-start'};
`

export const Image = styled.div`
  position: fixed;
  display: flex;
  height: 30%;
  width: 100%;
  max-width: 300px;
  background: url(${celloImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;

  @media screen and (max-width: 900px) {
    position: fixed;
    right: 0px;
    top: 0px;
    background: url(${birdImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    max-width: 50px;
    margin-top: 10px;
  }
`

export const Stepper = styled.div`
  position: fixed;
  height: 100%;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 860px) {
    padding-right: 1rem;
  }
`
