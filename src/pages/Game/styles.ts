import styled from 'styled-components'
import celloImg from 'assets/images/cello-game-page.png'
import birdImg from 'assets/images/bird-mobile.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
  margin-top: 2rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 800px) {
    padding: 0px 0.9rem 2rem 0.9rem;
    margin-top: 0px;
  }
`

export const SideArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`

export const Image = styled.div`
  position: fixed;
  display: flex;
  height: 30%;
  width: 100%;
  max-width: 300px;
  margin-top: -30px;
  margin-left: 3rem;
  background: url(${celloImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 2 !important;

  @media screen and (max-width: 1300px) {
    margin-left: 15px;
    margin-top: -30px;
  }

  @media screen and (max-width: 1205px) {
    max-width: 200px;
    margin-left: 5px;
    margin-top: -30px;
  }

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
